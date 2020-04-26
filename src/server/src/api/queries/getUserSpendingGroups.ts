import { SpendingGroup } from '../types/SpendingGroup';
import { db } from '../tests/db';

export default (spendingGroups: number[]): SpendingGroup[] => {
  const userSpendingGroups = db.spendingGroups
    .filter((spendingGroup) => spendingGroups.includes(spendingGroup.id))
    .map((spendingGroup) => new SpendingGroup(spendingGroup));
  return userSpendingGroups;
};
