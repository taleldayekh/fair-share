import { db } from '../db';
import { IDBUser } from '../interfaces/types';

type GetUserByEmail = {
  email: string;
};

type GetUserArgs = GetUserByEmail;

const getUserByEmail = async (email: string): Promise<IDBUser[]> => {
  return (await db.table('users').filter({ email: email }).run())[0];
};

export { GetUserArgs, getUserByEmail };
