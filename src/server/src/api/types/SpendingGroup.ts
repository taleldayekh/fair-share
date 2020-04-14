import { DBSpendingGroup } from '../../interfaces/types';
import { User } from './User';
import getSpendingGroupUsers from '../queries/getSpendingGroupUsers';

export const SpendingGroupType = `
  type SpendingGroup {
    id: ID!
    groupName: String!
    users: [User]
  }
`;

export class SpendingGroup {
  public id: number;
  public groupName: string;

  constructor(db_row: DBSpendingGroup) {
    this.id = db_row.id;
    this.groupName = db_row.groupName;
  }

  users(): User[] {
    return getSpendingGroupUsers(this.id);
  }
}
