import { User } from '../../types/User';
import { getUserByEmail } from '../../../models/user';

export default async (email: string): Promise<User> => {
  const user = await getUserByEmail(email);

  if (!user) {
    // TODO: GraphQL error handling
    throw new Error('User does not exist');
  }

  return new User(user);
};
