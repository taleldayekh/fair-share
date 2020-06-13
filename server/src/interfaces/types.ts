export interface IDBUser {
  id: string;
  name: string;
  email: string;
}

export interface IDBSpendingGroup {
  id: string;
  ownerId: string;
  name: string;
  spending?: Spending;
}

export interface IDBSpending {
  id: string;
  ownerId: string;
  spendingGroupId: string;
  amount: number;
}

// TODO: Delete this type
type Spending = IDBSpending[];
