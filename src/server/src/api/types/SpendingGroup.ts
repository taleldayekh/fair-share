import { DBSpendingGroup } from '@/interfaces/types';
import { User } from '@/api/types/User';
import getSpendingGroupOwner from '@/api/queries/getSpendingGroupOwner';
import getSpendingGroupParticipants from '@/api/queries/getSpendingGroupParticipants';

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
  private _participants: number[];

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
  participants(): User[] {
    return getSpendingGroupParticipants(this._participants);
  }
}
