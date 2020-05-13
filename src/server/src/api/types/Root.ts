// import { User } from '../types/User';
import { GetUserArgs } from '../../models/user';
import getUserByEmail from '../queries/user/getUserByEmail';

const RootQueryType = `
  type Query {
    userByEmail(email: String!): User
  }
`;

class Root {
  // Queries
  userByEmail(args: GetUserArgs) {
    return getUserByEmail(args.email);
  }
}

export { RootQueryType, Root };
