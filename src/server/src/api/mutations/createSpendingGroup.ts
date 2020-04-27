import { SpendingGroup } from '../types/SpendingGroup';
import { db } from '../tests/db';

export default (userId: number, name: string): SpendingGroup => {
  const spendingGroup = {
    id: db.spendingGroups.length + 1,
    owner: userId,
    name,
    createdAt: new Date(),
    participants: [userId],
  };
  db.spendingGroups.push(spendingGroup);

  let user = db.users.find((user) => user.id === userId);
  if (user) {
    user.spendingGroups.push(spendingGroup.id);
  }

  return new SpendingGroup(spendingGroup);
};
