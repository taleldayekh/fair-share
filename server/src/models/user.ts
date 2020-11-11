import { db } from '../db';
import { DBUser } from '../interfaces/models.interface';
import { RDatum } from 'rethinkdb-ts';

const getUserByEmail = async (email: string): Promise<DBUser | undefined> => {
  return (await db.table('users').filter({ email: email }).run())[0];
};

const createUser = async (
  name: string,
  email: string,
): Promise<DBUser | undefined> => {
  return (
    await db
      .table('users')
      .filter({ email: email })
      .count()
      .do((user: RDatum) => {
        return db.branch(
          user.eq(0),
          db
            .table('users')
            .insert({ name, email })
            .do(() => {
              return db.table('users').filter({ email: email });
            }),
          [],
        );
      })
      .run()
  )[0];
};

export { getUserByEmail, createUser };
