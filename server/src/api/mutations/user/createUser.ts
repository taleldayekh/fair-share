import User from '../../object-types/User';
import { createUser } from '../../../models/user';

export default async (name: string, email: string): Promise<User> => {
  const user = await createUser(name, email);

  if (!user) throw new Error(`User with email ${email} already exists`);

  return new User(user);
};
