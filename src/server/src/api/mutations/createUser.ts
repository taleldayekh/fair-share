import { User } from '../types/User';
// TODO: Remove import
import { users } from '../tests/dummy-db';

export default (username: string): User => {
  // TODO: Replace with query to real db
  const user = {
    id: users.length + 1,
    username,
    spendingGroupsId: [],
  };
  users.push(user);
  return new User(user);
};
