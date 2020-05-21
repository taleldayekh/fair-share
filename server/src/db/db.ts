import { r } from 'rethinkdb-ts';
import config from '../config';

const DB_CONFIG = {
  db: !process.env.TEST_DB ? config.db : 'testdb',
  port: config.dbPort,
  host: config.dbHost,
};
const connectOptions = {
  ...DB_CONFIG,
};

r.connectPool(connectOptions);

export const db = r;
