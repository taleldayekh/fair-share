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

  constructor(dbRow: DBSpendingGroup) {
    this.id = dbRow.id;
    this.groupName = dbRow.groupName;
  }

  users(): User[] {
    return getSpendingGroupUsers(this.id);
  }
}
