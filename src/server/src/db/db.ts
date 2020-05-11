import { r } from 'rethinkdb-ts';

// TODO: Environment variables and flags for connecting to either test db or prod db
const DB_OPTIONS = {
  db: 'fairsharedb',
};
// TODO: Environment variables for connect options and flags for dev, test and prod connections
const CONNECT_OPTIONS = {
  host: 'localhost',
  port: 28015,
};
const config = {
  ...DB_OPTIONS,
  ...CONNECT_OPTIONS,
};

export default async () => {
  await r.connectPool(config);
  return r;
};
