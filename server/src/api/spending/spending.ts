import { IDBSpending, ISpending } from '../../interfaces/types';

export const spending = (dbSpending: IDBSpending): ISpending => {
  const id = dbSpending.id;
  const userId = dbSpending.userId;
  const spendingGroupId = dbSpending.spendingGroupId;
  const label = dbSpending.label;
  const amount = dbSpending.amount;

  return {
    id,
    userId,
    spendingGroupId,
    label,
    amount,
  };
};
