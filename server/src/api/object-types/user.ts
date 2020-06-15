import { IDBUser, IUser } from '../../interfaces/types';

export const user = (dbUser: IDBUser): IUser => {
  const id = dbUser.id;
  const name = dbUser.name;
  const email = dbUser.email;

  return {
    id,
    name,
    email,
  };
};