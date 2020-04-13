import { DBUser } from '../../interfaces/types';
import getUserSpendingGroups from '../queries/getUserSpendingGroups';

export const User = `
  type User {
    id: ID!
    username: String!
    spendingGroups: [SpendingGroup]
  }
`;

export class UserType {
  public id: string;
  public username: string;
  public spendingGroupsId?: [string];

  constructor(db_row: DBUser) {
    this.id = db_row.id;
    this.username = db_row.username;
    this.spendingGroupsId = db_row.spendingGroupsId;
  }

  spendingGroups() {
    return getUserSpendingGroups(this.spendingGroupsId);
  }
}
