import { DBUser } from '../../interfaces/types';
import { SpendingGroup } from './SpendingGroup';
import getUserSpendingGroups from '../queries/getUserSpendingGroups';
import getUserParticipatingSpendingGroups from '../queries/getUserParticipatingSpendingGroups';

export const UserType = `
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
    spendingGroups: [SpendingGroup]
    participatingSpendingGroups: [SpendingGroup]
  }
`;

export class User {
  public id: number;
  public name: string;
  public email: string;
  public createdAt: Date;
  private _spendingGroups?: number[];
  private _participatingSpendingGroups?: number[];

  constructor(dbRow: DBUser) {
    this.id = dbRow.id;
    this.name = dbRow.name;
    this.email = dbRow.email;
    this.createdAt = dbRow.createdAt;
    this._spendingGroups = dbRow.spendingGroups;
    this._participatingSpendingGroups = dbRow.participatingSpendingGroups;
  }

  // List of spending groups that the user is an owner of
  spendingGroups(): SpendingGroup[] {
    if (!this._spendingGroups) {
      throw new Error('User does not own any spending groups');
    }

    return getUserSpendingGroups(this._spendingGroups);
  }

  // List of spending groups that the user is a part of
  participatingSpendingGroups(): SpendingGroup[] {
    if (!this._participatingSpendingGroups) {
      throw new Error('User is not part of any spending groups');
    }

    return getUserParticipatingSpendingGroups(
      this._participatingSpendingGroups,
    );
  }
}
