import { createUser } from '../../../../models/user';
import { normalizeResolverFieldNames } from '../../../../shared/utils/normalizeFields';
import { User } from '../../../../interfaces/api.interface';

export default async (name: string, email: string): Promise<User> => {
  const user = await createUser(name, email);

  if (!user) throw new Error(`User with email ${email} already exists`);

  return normalizeResolverFieldNames(user);
};
