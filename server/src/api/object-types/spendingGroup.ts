import {
  IDBSpendingGroup,
  ISpendingGroup,
  IDBSpending,
  ISpending,
} from '../../interfaces/types';

export const spendingGroup = (
  dbSpendingGroup: IDBSpendingGroup,
): ISpendingGroup => {
  const id = dbSpendingGroup.id;
  const ownerId = dbSpendingGroup.ownerId;
  const name = dbSpendingGroup.name;
  const spending = dbSpendingGroup.spending;

  return {
    id,
    ownerId,
    name,
    spending,
  };
};

export const spending = (dbSpending: IDBSpending): ISpending => {
  const id = dbSpending.id;
  const ownerId = dbSpending.ownerId;
  const spendingGroupId = dbSpending.spendingGroupId;
  const label = dbSpending.label;
  const amount = dbSpending.amount;

  return {
    id,
    ownerId,
    spendingGroupId,
    label,
    amount,
  };
};
