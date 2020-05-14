import { User } from '../types/User';
import { GetUserArgs } from '../../models/user';
import getUserByEmail from '../queries/user/getUserByEmail';

const RootQueryType = `
  type Query {
    userByEmail(email: String!): User
  }
`;

class Root {
  // Queries
  async userByEmail(args: GetUserArgs): Promise<User> {
    return await getUserByEmail(args.email);
  }
}

export { RootQueryType, Root };
