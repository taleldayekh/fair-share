import { r } from 'rethinkdb-ts';
import config from '../../config';
import { testData } from './test-data';
import { normalizeFields } from '../utils/normalize-fields';

const dbData = normalizeFields(testData);
const dbTables = Object.keys(dbData);

const setupTestDB = async () => {
  await r.connectPool({
    db: 'testdb',
    port: config.dbPort,
    host: config.dbHost,
  });
  await r.dbCreate('testdb').run();
  await Promise.all(dbTables.map((dbTable) => r.tableCreate(dbTable).run()));
  await Promise.all(
    dbTables.map((dbTable) => r.table(dbTable).insert(dbData[dbTable])),
  );
};

const setupTestDotenvFiles = () => {};

export default async (): Promise<void> => {
  /*
  Creates a test database and seeds it with test data when
  a test suite runs with the TEST_API variable set to true.
  */
  process.env.TEST_API && (await setupTestDB());
};
