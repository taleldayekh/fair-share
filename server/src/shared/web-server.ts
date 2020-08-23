import { Observable, Observer } from 'rxjs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

interface HTTPServerStream {
  req: IncomingMessage;
  res: ServerResponse;
}

export const HTTPServerStream$ = (port: number) => {
  return Observable.create((observer: Observer<HTTPServerStream>) => {})
}









// import { Observable } from 'rxjs';
// import { createServer, IncomingMessage, ServerResponse } from 'http';

// const createHttpRxStream = (port: number) => {
//   return Observable
//       //@ts-ignore
//       .create(observer => {
//         // create a http server that emits a connection event of the request and response objects
//         const server = createServer((req,res) => observer.next({req,res})).listen(port);

//         // close the server as our unsubscriber fn
//         // return server.close.bind(server);
//       });
// };


// const bla = createHttpRxStream(666)

// // @ts-ignore
// bla.subscribe(val => console.log(val))





// !! Above is an attempted RxJS implementation

// import { createServer, Server, IncomingMessage, ServerResponse } from 'http';

// interface MiddlewareLayer {
//   url: string;
//   middleware: Function;
// }

// const middlewareLayer = (
//   url: string,
//   middleware: Function,
// ): MiddlewareLayer => {
//   return {
//     url,
//     middleware,
//   };
// };

// const executeMiddleware = (
//   req: IncomingMessage,
//   res: ServerResponse,
//   middlewareStack: MiddlewareLayer[],
//   callback: any,
// ) => {
//   let middlewareIndex: number = 0;

//   const next = () => {
//     // ! Handle with callback
//     if (middlewareIndex >= middlewareStack.length) return

//     const middlewareLayer = middlewareStack[middlewareIndex++]

//     // ! We need to check that the url matches the one specified in the
//     // ! middleware.
//     console.log(req.url)
//   }

//   next()
// };

// export const httpServer = () => {
//   let middlewareStack: MiddlewareLayer[] = [];

//   const use = (url: string, middleware: Function) => {
//     middlewareStack.push(middlewareLayer(url, middleware));
//   };

//   const run = (port: number): Server => {
//     const middleware = (req: IncomingMessage, res: ServerResponse) => {
//       // ! Do something meaningful with the callback
//       executeMiddleware(req, res, middlewareStack, () => {});
//     };

//     return createServer(middleware).listen(port, () => {
//       console.log(`Server running on PORT ${port}`);
//     });
//   };

//   return {
//     use,
//     run,
//   };
// };

// !! Run code here
/*
 * The constructor is by default returning a  new object containing its values.
 */
// const talel = httpServer();
// talel.run(666);
// talel.use('one', () => {});
// talel.use('two', () => {});
// talel.use('three', () => {});
