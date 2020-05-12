import { User } from '@/api/types/User';
import { db } from '@/api/tests/db';

export default (owner: number): User => {
  const spendingGroupOwner = db.users.find((user) => user.id === owner);

  if (!spendingGroupOwner) {
    throw new Error('');
  }

  return new User(spendingGroupOwner);
};
