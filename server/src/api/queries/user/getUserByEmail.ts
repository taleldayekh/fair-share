import User from '../../object-types/User';
import { getUserByEmail } from '../../../models/user';

export default async (email: string): Promise<User> => {
  const user = await getUserByEmail(email);

  if (!user) throw new Error('User does not exist');

  return new User(user);
};
