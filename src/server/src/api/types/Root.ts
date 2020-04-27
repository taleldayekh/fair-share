import { User } from './User';
import { SpendingGroup } from './SpendingGroup';
import getUser from '../queries/getUser';
import createUser from '../mutations/createUser';
import createSpendingGroup from '../mutations/createSpendingGroup';

export const RootQueryType = `
  type Query {
    user(id: Int!): User
  }
`;

export const RootMutationType = `
  type Mutation {
    addUser(email: String!, name: String!): User
    createSpendingGroup(userId: Int! name: String!): SpendingGroup
  }
`;

export class Root {
  // TODO: Replace any type
  // Queries
  user(args: any): User {
    return getUser(args.id);
  }

  // TODO: Replace any type
  // Mutations
  addUser(args: any): User {
    return createUser(args.email, args.name);
  }

  createSpendingGroup(args: any): SpendingGroup {
    console.log(args);
    return createSpendingGroup(args.userId, args.name);
  }
}
