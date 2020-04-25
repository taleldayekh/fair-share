import { DBUser } from '../../interfaces/types';
import { SpendingGroup } from './SpendingGroup';
import getUserSpendingGroups from '../queries/getUserSpendingGroups';

export const UserType = `
  type User {
    createdAt: DateTime!
    email: String!
    id: ID!
    name: String!
    participatingSpendingGroups: [SpendingGroup]
    spendingGroups: [SpendingGroup]
  }
`;

export class User {
  public createdAt: string;
  public email: string;
  public id: number;
  public name: string;

  constructor(dbRow: DBUser) {
    this.createdAt = dbRow.createdAt;
    this.email = dbRow.email;
    this.id = dbRow.id;
    this.name = dbRow.name;
  }

  participatingSpendingGroups(): SpendingGroup[] {
    // TODO: Add function
  }

  spendingGroups(): SpendingGroup[] {
    if () {
      // TODO: Properly handle errors in GraphQL
      throw new Error('GraphQL Error');
    }
    // TODO: Fix broken function
    return getUserSpendingGroups();
  }
}
