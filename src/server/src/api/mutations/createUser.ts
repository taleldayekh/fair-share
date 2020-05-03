import { User } from '../types/User';
import { db } from '../tests/db';

export default (email: string, name: string): User => {
  if (db.users.find((user) => user.email === email)) {
    throw new Error('A user with that email already exists');
  }

  const user = {
    id: db.users.length + 1,
    name,
    email,
    createdAt: new Date(),
    spendingGroups: [],
    participatingSpendingGroups: [],
  };
  db.users.push(user);

  return new User(user);
};
