import { IDBSpendingGroup, IDBSpending } from '../../interfaces/types';

export class SpendingGroup {
  public id: string;
  public ownerId: string;
  public name: string;
  public spending?: Spending[];

  constructor(dbSpendingGroup: IDBSpendingGroup) {
    this.id = dbSpendingGroup.id;
    this.ownerId = dbSpendingGroup.ownerId;
    this.name = dbSpendingGroup.name;
    this.spending = dbSpendingGroup.spending;
  }
}

export class Spending {
  public id: string;
  public ownerId: string;
  public spendingGroupId: string;
  public amount: number;

  constructor(dbSpending: IDBSpending) {
    this.id = dbSpending.id;
    this.ownerId = dbSpending.ownerId;
    this.spendingGroupId = dbSpending.spendingGroupId;
    this.amount = dbSpending.amount;
  }
}
