const r = require('rethinkdb');

// TODO: Environment variables for connecting to either test db or prod db
const DB_OPTIONS = {
  db: 'fairsharedb',
};
// TODO: Environment variables for connect options and create separate connections for dev, test and prod
const CONNECT_OPTIONS = {
  host: 'localhost',
  port: 28015,
};
const config = {
  ...DB_OPTIONS,
  ...CONNECT_OPTIONS,
};

let connection = null;

// TODO: Replace any type
r.connect(config, (err: any, conn: any) => {
  if (err) throw err;
  connection = conn;
});
