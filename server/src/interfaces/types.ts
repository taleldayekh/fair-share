export interface IDBUser {
  id: string;
  name: string;
  email: string;
}

export interface IUser extends IDBUser {}

export interface IDBSpendingGroup {
  id: string;
  ownerId: string;
  name: string;
  spending?: Spending[];
}

export interface ISpendingGroup extends IDBSpendingGroup {}

export interface IDBSpending {
  id: string;
  ownerId: string;
  spendingGroupId: string;
  label: string;
  amount: number;
}

export interface ISpending extends IDBSpending {}

type Spending = IDBSpending;
