import { createSpendingGroup } from '../../../../models/spendingGroup';
import { normalizeResolverFieldNames } from '../../../../shared/utils/normalizeFields';
import { SpendingGroup } from '../../../../interfaces/api.interface';

export default async (userId: string, name: string): Promise<SpendingGroup> => {
  const spendingGroup = await createSpendingGroup(userId, name);
  return normalizeResolverFieldNames(spendingGroup);
};
