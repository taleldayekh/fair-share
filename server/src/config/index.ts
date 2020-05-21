import dotEnvParser from '../shared/dotEnvParser';

dotEnvParser();

export default {
  serverPort: process.env.SERVER_PORT,
  db: process.env.DB,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
};
