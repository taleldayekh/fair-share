import { r } from 'rethinkdb-ts';

const DB_OPTIONS = {
  db: process.env.TEST_DB ? 'testdb' : 'fairsharedb',
};
// TODO: Environment variables for connect options and flags for dev, test and prod connections
const CONNECT_OPTIONS = {
  host: 'rethinkdb',
  port: 28015,
};
const config = {
  ...DB_OPTIONS,
  ...CONNECT_OPTIONS,
};

r.connectPool(config);

export const db = r;
