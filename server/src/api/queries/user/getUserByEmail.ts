import { getUserByEmail } from '../../../models/user';
import { normalizeFields } from '../../utils/normalizeFields'
import { IDBUser } from '../../../interfaces/types';

export default async (email: string): Promise<IDBUser> => {
  const user = await getUserByEmail(email);

  if (!user) throw new Error('User does not exist');

  return normalizeFields(user);
};
