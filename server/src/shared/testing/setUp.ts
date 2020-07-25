import { r } from 'rethinkdb-ts';
import { normalizeDBFieldNames } from '../utils/normalizeFields';
import config from '../../config';
import { testData } from './test-data';

const dbData = normalizeDBFieldNames(testData);
const dbTables = Object.keys(dbData);

export default async () => {
  await r.connectPool({
    db: 'testdb',
    port: config.dbPort,
    host: config.dbHost,
  });

  // Creates test database and seeds it with test data
  await r.dbCreate('testdb').run();
  await Promise.all(dbTables.map((dbTable) => r.tableCreate(dbTable).run()));
  await Promise.all(
    dbTables.map((dbTable) => r.table(dbTable).insert(dbData[dbTable]).run()),
  );
};
