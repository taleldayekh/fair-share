import { IDBSpendingGroup, ISpendingGroup } from '../../interfaces/types';

/* istanbul ignore next */
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
