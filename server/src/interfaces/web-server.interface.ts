import { IncomingMessage, ServerResponse } from 'http';

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
  addRoute: (method: string, urlPath: string, handler: Handler) => void;
  routes: () => any;
}

export type Handler = (http: HTTP) => void;
