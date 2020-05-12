import { User } from '@/api/types/User';
import { SpendingGroup } from '@/api/types/SpendingGroup';
import getUser from '@/api/queries/getUser';
import createUser from '@/api/mutations/createUser';
import createSpendingGroup from '@/api/mutations/createSpendingGroup';

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
  // Queries
  user(args: { id: number }): User {
    return getUser(args.id);
  }

  // Mutations
  addUser(args: { email: string; name: string }): User {
    return createUser(args.email, args.name);
  }

  createSpendingGroup(args: { userId: number; name: string }): SpendingGroup {
    return createSpendingGroup(args.userId, args.name);
  }
}
