import { SpendingGroup } from '../types/SpendingGroup';
// TODO: Remove import
import { spendingGroups } from '../tests/dummy-db';

export default (spendingGroupsId: number[]): SpendingGroup[] => {
  // TODO: Replace with query to real db
  const userSpendingGroups = spendingGroups
    .filter((spendingGroup) => spendingGroupsId.includes(spendingGroup.id))
    .map((spendingGroup) => new SpendingGroup(spendingGroup));
  return userSpendingGroups;
};
