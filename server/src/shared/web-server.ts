import { Observable, Observer } from 'rxjs';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { HTTP, Route } from '../interfaces/web-server.interface';

export const httpServerStream = (port: number): Observable<HTTP> => {
  return Observable.create((observer: Observer<HTTP>) => {
    createServer((req: IncomingMessage, res: ServerResponse) =>
      observer.next({ req, res }),
    ).listen(port, () => {
      console.log(`Server running on PORT ${port}`);
    });
  });
};

export const router = () => {
  const routes: Route[] = [];

  const addRoute = () => {};

  return {
    addRoute,
  };
};
