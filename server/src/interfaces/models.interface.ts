export interface DBUser {
  id: string;
  name: string;
  email: string;
}

export interface DBSpendingGroup {
  id: string;
  ownerId: string;
  name: string;
  spending?: DBSpending[];
}

export interface DBSpending {
  id: string;
  userId: string;
  spendingGroupId: string;
  label: string;
  amount: number;
}
