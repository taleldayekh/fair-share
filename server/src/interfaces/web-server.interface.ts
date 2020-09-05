import { IncomingMessage, ServerResponse } from 'http';

export interface HTTP {
  req: IncomingMessage;
  res: ServerResponse;
}

export interface Route {
  [url: string]: (req: IncomingMessage, res: ServerResponse) => void;
}
