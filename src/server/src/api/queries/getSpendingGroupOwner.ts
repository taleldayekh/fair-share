import { User } from '../types/User';
import { db } from '../tests/db';

export default (owner: number): User => {
  const spendingGroupOwner = db.users.find((user) => user.id === owner);

  if (!spendingGroupOwner) {
    throw new Error('');
  }

  return new User(spendingGroupOwner);
};
