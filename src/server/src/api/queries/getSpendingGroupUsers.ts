import { User } from '../types/User';
// TODO: Remove import
import { users } from '../tests/dummy-db';

export default (spendingGroupId: number): User[] => {
  // TODO: Replace with query to real db
  const spendingGroupUsers = users
    .filter((user) => user.spendingGroupsId.includes(spendingGroupId))
    .map((user) => new User(user));
  return spendingGroupUsers;
};
