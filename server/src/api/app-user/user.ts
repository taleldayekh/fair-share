import { IDBUser, IUser } from '../../interfaces/types';

/* istanbul ignore file */
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
