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

  constructor(db_row: DBUser) {
    this.id = db_row.id;
    this.username = db_row.username;
    this.spendingGroupsId = db_row.spendingGroupsId;
  }

  spendingGroups(): SpendingGroup[] {
    if (!this.spendingGroupsId) {
      // TODO: Properly handle errors in GraphQL
      throw new Error('GraphQL Error');
    }

    return getUserSpendingGroups(this.spendingGroupsId);
  }
}
