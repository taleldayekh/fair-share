import { r } from 'rethinkdb-ts';
// import { testData } from './test-data';

export default async () => {
  process.env.TEST_API && await closeTestDB();
};

const closeTestDB = async () => {
  await r.dbDrop('testdb').run();
  await r.getPoolMaster()!.drain();
};
