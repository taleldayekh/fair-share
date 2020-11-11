import { DBSpendingGroup } from '../../interfaces/models.interface';
import { SpendingGroup } from '../../interfaces/api.interface';

/* istanbul ignore file */
export const spendingGroup = (
  dbSpendingGroup: DBSpendingGroup,
): SpendingGroup => {
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
