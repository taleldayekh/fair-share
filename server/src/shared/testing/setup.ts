import config from '../../config';
import { normalizeFields } from '../utils/normalize-fields';
import { r } from 'rethinkdb-ts';
import { testData } from './test-data';

const dbData = normalizeFields(testData);
const dbTables = Object.keys(dbData);

const setupTestDB = async (): Promise<void> => {
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

export default async (): Promise<void> => {
  /*
  Creates a test database and seeds it with test data when
  a test suite runs with the TEST_API variable set to true.
  */
  process.env.TEST_API && (await setupTestDB());
};
