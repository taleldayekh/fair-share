import { createHTTPServerStream, createRouter } from '../shared/web-server';
import { graphQLMiddleware } from './middleware/graphql';
import schema from './schema';
import { root } from './root';
import config from '../config';

const port = config.serverPort;
const server$ = createHTTPServerStream(port);
const router = createRouter();

router.addRoute('/api', graphQLMiddleware(schema, root));
server$.pipe(router.routes()).subscribe();
