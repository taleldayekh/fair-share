import { r } from 'rethinkdb-ts';
import { testData } from './test-data';

const dbTables = Object.keys(testData);

type DBTable = 'users';

export default async () => {
  await r.connectPool({
    db: 'testdb',
    host: '0.0.0.0',
    port: 28015,
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
