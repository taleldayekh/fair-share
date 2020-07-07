import { newSpending } from '../../../models/spending';
import { normalizeFields } from '../../utils/normalizeFields';
import { IDBSpending } from '../../../interfaces/types';

export default async (
  userId: string,
  spendingGroupId: string,
  label: string,
  amount: number,
): Promise<IDBSpending> => {
  const spending = await newSpending(userId, spendingGroupId, label, amount);
  return normalizeFields(spending);
};
