import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  HTTP,
  Router,
  Route,
  Handler,
} from '../interfaces/web-server.interface';

export const createHTTPServerStream = (port: number): Observable<HTTP> => {
  return Observable.create((observer: Observer<HTTP>) => {
    createServer((req: IncomingMessage, res: ServerResponse) =>
      observer.next({ req, res }),
    ).listen(port, () => {
      console.log(`Server running on PORT ${port}`);
    });
  });
};

export const createRouter = (): Router => {
  const routesStack: Route[] = [];

  const addRoute = (
    method: string,
    urlPath: string,
    handler: Handler,
  ): void => {
    routesStack.push({
      method,
      urlPath,
      handler,
    });
  };

  const routes = () => {
    return (observable: Observable<HTTP>) =>
      observable.pipe(
        map((value: HTTP) => parseRoutes(value)),
        map((value: HTTP) => clientErrorResponse(value)),
      );
  };

  const parseRoutes = (http: HTTP) => {
    const { req } = http;
    const matchedRoutes = routesStack.filter(
      (route) => route.urlPath === req.url,
    );

    if (!matchedRoutes.length)
      return { ...http, statusCode: 404, responseMessage: '404 Not Found' };

    for (const matchedRoute of matchedRoutes) {
      if (matchedRoute.method !== req.method) {
        return {
          ...http,
          statusCode: 405,
          responseMessage: '405 Method Not Allowed',
        };
      }
      matchedRoute.handler(http);
    }

    return http;
  };

  const clientErrorResponse = (http: HTTP) => {
    if (http.statusCode === undefined || http.responseMessage === undefined)
      return http;

    const { res } = http;

    res.statusCode = http.statusCode;
    res.end(http.responseMessage);
  };

  return {
    addRoute,
    routes,
  };
};
