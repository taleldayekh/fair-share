import { graphql, buildSchema } from 'graphql';
import { HTTP, Handler } from '../../interfaces/web-server.interface';

export const graphQLMiddleware = (
  schema: string,
  root: () => Record<string, unknown>,
): Handler => {
  return (http: HTTP): void => {
    const { req, res } = http;
    const body: Buffer[] = [];

    req.on('data', (chunk: Buffer) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const query = Buffer.concat(body).toString();
      graphql({
        schema: buildSchema(schema),
        source: query,
        rootValue: root(),
        contextValue: { req, res },
      }).then((data) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
      });
    });
  };
};
