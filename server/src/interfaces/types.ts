export interface IDBUser {
  id: string;
  name: string;
  email: string;
}

export type IUser = IDBUser;

export interface IDBSpendingGroup {
  id: string;
  ownerId: string;
  name: string;
  spending?: Spending[];
}

export type ISpendingGroup = IDBSpendingGroup;

export interface IDBSpending {
  id: string;
  userId: string;
  spendingGroupId: string;
  label: string;
  amount: number;
}

export type ISpending = IDBSpending;

type Spending = IDBSpending;
