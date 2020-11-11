import { DBSpending } from '../../interfaces/models.interface';
import { Spending } from '../../interfaces/api.interface';

/* istanbul ignore file */
export const spending = (dbSpending: DBSpending): Spending => {
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
