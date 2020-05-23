import { User } from '../types/User';
import { GetUserArgs, CreateUserArgs } from '../../models/user';
import getUserByEmail from '../queries/user/getUserByEmail';
import createUser from '../mutations/user/createUser';

const RootQueryType = `
  type Query {
    userByEmail(email: String!): User
  }
`;

const RootMutationType = `
  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

class Root {
  // Queries
  async userByEmail(args: GetUserArgs): Promise<User> {
    return await getUserByEmail(args.email);
  }

  // Mutations
  async createUser(args: CreateUserArgs): Promise<User> {
    return await createUser(args.name, args.email);
  }
}

export { RootQueryType, RootMutationType, Root };
