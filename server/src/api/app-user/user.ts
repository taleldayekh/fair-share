import { DBUser } from '../../interfaces/models.interface';
import { User } from '../../interfaces/api.interface';

/* istanbul ignore file */
export const user = (dbUser: DBUser): User => {
  const id = dbUser.id;
  const name = dbUser.name;
  const email = dbUser.email;

  return {
    id,
    name,
    email,
  };
};
