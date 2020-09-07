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

  const addRoute = (urlPath: string, handler: Handler): void => {
    routesStack.push({
      [urlPath]: handler,
    });
  };

  const parseRoutes = (http: HTTP) => {
    const { req, res } = http;
    const matchedRoutes = routesStack.filter(
      (route) => Object.keys(route)[0] === req.url,
    );

    if (matchedRoutes.length) {
      matchedRoutes.forEach((route) => {
        Object.values(route)[0](http);
      });
    } else {
      res.statusCode = 404;
      res.write('404 Not Found');
      res.end();
    }
  };

  const routes = () => {
    return (observable: Observable<HTTP>) =>
      observable.pipe(map((value: HTTP) => parseRoutes(value)));
  };

  return {
    addRoute,
    routes,
  };
};
