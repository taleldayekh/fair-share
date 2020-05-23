import { db } from '../db';
import { IDBUser } from '../interfaces/types';
import { RDatum } from 'rethinkdb-ts';

type GetUserByEmail = {
  email: string;
};

type GetUserArgs = GetUserByEmail;

const getUserByEmail = async (email: string): Promise<IDBUser> => {
  return (await db.table('users').filter({ email: email }).run())[0];
};

type NewUserFromEmail = {
  name: string;
  email: string;
};

type CreateUserArgs = NewUserFromEmail;

const createUser = async (name: string, email: string): Promise<IDBUser> => {
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
            .insert({ name: name, email: email })
            .do(() => {
              return db.table('users').filter({ email: email });
            }),
          [],
        );
      })
      .run()
  )[0];
};

export { GetUserArgs, getUserByEmail, CreateUserArgs, createUser };
