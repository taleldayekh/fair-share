import { DBUser } from '../../interfaces/types';
import { SpendingGroup } from './SpendingGroup';
import getUserSpendingGroups from '../queries/getUserSpendingGroups';

export const UserType = `
  type User {
    id: ID!
    username: String!
    spendingGroups: [SpendingGroup]
  }
`;

export class User {
  public id: number;
  public username: string;
  public spendingGroupsId?: number[];

  constructor(dbRow: DBUser) {
    this.id = dbRow.id;
    this.username = dbRow.username;
    this.spendingGroupsId = dbRow.spendingGroupsId;
  }

  spendingGroups(): SpendingGroup[] {
    if (!this.spendingGroupsId) {
      // TODO: Properly handle errors in GraphQL
      throw new Error('GraphQL Error');
    }

    return getUserSpendingGroups(this.spendingGroupsId);
  }
}
