import dotEnvParser from '../shared/utils/dotEnvParser';

dotEnvParser();

export default {
  serverPort: Number(process.env.SERVER_PORT),
  serverHost: process.env.SERVER_HOST,
  db: process.env.DB,
  dbPort: Number(process.env.DB_PORT),
  dbHost: process.env.DB_HOST,
};
