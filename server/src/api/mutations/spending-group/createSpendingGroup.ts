import { createSpendingGroup } from '../../../models/spendingGroup';
import { normalizeFields } from '../../utils/normalizeFields';
import { IDBSpendingGroup } from '../../../interfaces/types';

export default async (
  userId: string,
  name: string,
): Promise<IDBSpendingGroup> => {
  const spendingGroup = await createSpendingGroup(userId, name);
  return normalizeFields(spendingGroup)
};
