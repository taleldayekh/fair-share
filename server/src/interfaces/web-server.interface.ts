import { IncomingMessage, ServerResponse } from 'http';
import { Observable } from 'rxjs';

export type Handler = (http: HTTP) => void;

type AddRoute = (method: string, urlPath: string, handle: Handler) => void;

type Routes = () => (
  observable: Observable<HTTP>,
) => Observable<HTTP | undefined>;

export interface HTTP {
  req: IncomingMessage;
  res: ServerResponse;
  statusCode?: number;
  responseMessage?: string;
}

export interface Route {
  method: string;
  urlPath: string;
  handler: Handler;
}

export interface Router {
  addRoute: AddRoute;
  routes: Routes;
}
