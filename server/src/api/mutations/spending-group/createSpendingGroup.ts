import { createSpendingGroup } from '../../../models/spendingGroup';
import { IDBSpendingGroup } from '../../../interfaces/types';

export default async (
  userId: string,
  name: string,
): Promise<IDBSpendingGroup> => {
  return await createSpendingGroup(userId, name);
};
