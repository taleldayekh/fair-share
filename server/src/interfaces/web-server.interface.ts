import { IncomingMessage, ServerResponse } from 'http';

export interface HTTP {
  req: IncomingMessage;
  res: ServerResponse;
}

export interface Route {
  [urlPath: string]: Handler;
}

export interface Router {
  addRoute: (urlPath: string, handler: Handler) => void;
  routes: () => any
}

export type Handler = (http: HTTP) => void;
