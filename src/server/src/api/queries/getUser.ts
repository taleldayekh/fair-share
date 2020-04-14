import { User } from '../types/User';
// TODO: Remove import
import { users } from '../tests/dummy-db';

export default (userId: number): User => {
  const user = users.find((user) => user.id === userId);
  // TODO: Properly handle errors in GraphQL
  if (!user) {
    throw new Error('GraphQL Error');
  }

  return new User(user);
};
