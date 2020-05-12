import { User } from '@/api/types/User';
import { db } from '@/api/tests/db';

export default (id: number): User => {
  const user = db.users.find((user) => user.id === id);

  if (!user) {
    throw new Error('User does not exist');
  }

  return new User(user);
};
