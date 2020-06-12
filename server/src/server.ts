// TODO: Enable https use
// import { createServer, Server } from 'https';
import { createServer, Server, IncomingMessage, ServerResponse } from 'http';

export const httpsServer = () => {
  let middlewareStack: Function[] = [];

  const use = (middleware: Function): void => {
    middlewareStack.push(middleware);
  };

  const run = (port: number): Server => {
    const executeMiddleware = (req: IncomingMessage, res: ServerResponse) => {
      let middlewareIndex: number = 0;

      const next = (): void => {
        if (middlewareIndex >= middlewareStack.length) return;

        const middleware = middlewareStack[middlewareIndex++];

        setImmediate(() => {
          middleware(req, res, next);
        });
      };

      next();
    };

    return createServer(executeMiddleware).listen(port);
  };

  return {
    use,
    run,
  };
};
