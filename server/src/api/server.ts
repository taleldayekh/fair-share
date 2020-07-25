import { httpsServer } from '../server';
import { graphql, buildSchema } from 'graphql';
import schema from './schema';
import { root } from './root';
import config from '../config';

// @ts-ignore
const testMiddleware = (res, req, next) => {
  res['talel'] = 'dayekh';
  next();
};

// @ts-ignore
const graphqlMiddleware = (req, res, next) => {
  switch (req.url) {
    case '/api': {
      if (req.method === 'POST') {
        let query: string;
        // @ts-ignore
        req.on('data', (chunk) => {
          query = chunk.toString();
        });

        req.on('end', () => {
          graphql({
            schema: buildSchema(schema),
            source: query,
            rootValue: root(),
            contextValue: { req, res },
            // fieldResolver: snakeCaseFieldResolver,
          }).then((data) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(data));
            res.end();
          });
        });
      }
      break;
    }
    default: {
      res.statusCode = 404;
      res.end();
    }
  }
};

const port = config.serverPort;
const apiServer = httpsServer();

apiServer.use(testMiddleware);
apiServer.use(graphqlMiddleware);
apiServer.run(port);

// server.on('request', (req: IncomingMessage, res: ServerResponse) => {
//   switch (req.url) {
//     case '/api': {
//       if (req.method === 'POST') {
//         let query: string;
//         req.on('data', (chunk) => {
//           query = chunk.toString();
//           console.log(query);
//         });
//         req.on('end', () => {
//           graphql({
//             schema: buildSchema(schema),
//             source: query,
//             rootValue: new Root(),
//             contextValue: req,
//           }).then((data) => {
//             console.log(data);
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.write(JSON.stringify(data));
//             res.end();
//           });
//         });
//       }
//       break;
//     }
//     default: {
//       res.statusCode = 404;
//       res.end();
//     }
//   }
// });
// // apiServer.run(port).on('request');

// // import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
// // import { graphql, buildSchema } from 'graphql';
// // import Root from './object-types/Root';
// // import schema from './schema';
// // import config from '../config';

// // // TODO: Store port in environment variable
// // const port = config.serverPort;
// // console.log(config);
// // console.log(port);
// // const server: Server = createServer().listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });
