import { getUserByEmail } from '../../../../models/user';
import { normalizeResolverFieldNames } from '../../../../shared/utils/normalizeFields';
import { User } from '../../../../interfaces/api.interface';

export default async (email: string): Promise<User> => {
  const user = await getUserByEmail(email);

  if (!user) throw new Error('User does not exist');

  return normalizeResolverFieldNames(user);
};
