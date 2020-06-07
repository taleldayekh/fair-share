import { SpendingGroup } from '../../object-types/SpendingGroup';
import { createSpendingGroup } from '../../../models/spendingGroup';

export default async (userId: string, name: string): Promise<SpendingGroup> => {
  const spendingGroup = await createSpendingGroup(userId, name);

  return new SpendingGroup(spendingGroup);
};
