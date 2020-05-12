import { SpendingGroup } from '@/api/types/SpendingGroup';
import { db } from '@/api/tests/db';

export default (participatingSpendingGroups: number[]): SpendingGroup[] => {
  const userParticipatingSpendingGroups = db.spendingGroups
    .filter((spendingGroup) =>
      participatingSpendingGroups.includes(spendingGroup.id),
    )
    .map((spendingGroup) => new SpendingGroup(spendingGroup));
  return userParticipatingSpendingGroups;
};
