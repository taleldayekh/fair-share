import { r } from 'rethinkdb-ts';
import config from '../../config';
import { testData } from './test-data';

const dbTables = Object.keys(testData);

type DBTable = 'users';

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
    dbTables.map((dbTable) =>
      r
        .table(dbTable)
        .insert(testData[dbTable as DBTable])
        .run(),
    ),
  );
};
