import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import { graphql, buildSchema } from 'graphql';
import { Root } from './types/Root';
import schema from './schema';
import config from '../config';

// TODO: Store port in environment variable
const port = config.serverPort;
const server: Server = createServer().listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.on('request', (req: IncomingMessage, res: ServerResponse) => {
  switch (req.url) {
    case '/api': {
      if (req.method === 'POST') {
        let query: string;
        req.on('data', (chunk) => {
          query = chunk.toString();
        });
        req.on('end', () => {
          graphql(buildSchema(schema), query, new Root()).then((data) => {
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
});
