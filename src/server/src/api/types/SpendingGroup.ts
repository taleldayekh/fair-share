import { DBSpendingGroup } from '../../interfaces/types';
import { User } from './User';
import getSpendingGroupOwner from '../queries/getSpendingGroupOwner';

export const SpendingGroupType = `
  type SpendingGroup {
    id: ID!
    owner: User!
    name: String!
    createdAt: String!
    participants: [User]!
  }
`;

export class SpendingGroup {
  public id: number;
  private _owner: number;
  public name: string;
  public createdAt: Date;
  private _participants?: number[];

  constructor(dbRow: DBSpendingGroup) {
    this.id = dbRow.id;
    this._owner = dbRow.owner;
    this.name = dbRow.name;
    this.createdAt = dbRow.createdAt;
    this._participants = dbRow.participants;
  }

  // User owner of a spending group
  owner(): User {
    return getSpendingGroupOwner(this._owner);
  }

  // List of users that are part of a spending group
  participants() {
    return this._participants;
  }
}
