import { newSpending } from '../../../../models/spending';
import { normalizeResolverFieldNames } from '../../../../shared/utils/normalizeFields';
import { Spending } from '../../../../interfaces/api.interface';

export default async (
  userId: string,
  spendingGroupId: string,
  label: string,
  amount: number,
): Promise<Spending> => {
  const spending = await newSpending(userId, spendingGroupId, label, amount);
  return normalizeResolverFieldNames(spending);
};
