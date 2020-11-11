import { r } from 'rethinkdb-ts';

/*
 * Removes the test database and closes the connection that
 * is established when the TEST_API variable is set to true.
 */
export default async (): Promise<void> => {
  process.env.TEST_API && (await teardownTestDB());
};

const teardownTestDB = async () => {
  await r.dbDrop('testdb').run();
  const masterPool = r.getPoolMaster();

  if (!masterPool) return;
  masterPool.drain();
};
