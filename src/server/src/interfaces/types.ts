export interface DBUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  spendingGroups?: number[];
  participatingSpendingGroups?: number[];
}

export interface DBSpendingGroup {
  id: number;
  owner: number;
  name: string;
  createdAt: Date;
  participants: number[];
}
