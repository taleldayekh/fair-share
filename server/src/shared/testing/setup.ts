import { r } from 'rethinkdb-ts';
import { normalizeDBFieldNames } from '../utils/normalizeFields';
import config from '../../config';
import { testData } from './test-data';

const dbData = normalizeDBFieldNames(testData);
const dbTables = Object.keys(dbData);

/*
 * Creates a test database and seeds it with test data when
 * a test suite runs with the TEST_API variable set to true.
 */
export default async (): Promise<void> => {
  process.env.TEST_API && (await setupTestDB());
};

const setupTestDB = async () => {
  await r.connectPool({
    db: 'testdb',
    port: config.dbPort,
    host: config.dbHost,
  });

  await r.dbCreate('testdb').run();
  await Promise.all(dbTables.map((dbTable) => r.tableCreate(dbTable).run()));
  await Promise.all(
    dbTables.map((dbTable) => r.table(dbTable).insert(dbData[dbTable]).run()),
  );
};
