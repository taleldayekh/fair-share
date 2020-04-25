export interface DBUser {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  participatingSpendingGroups?: DBSpendingGroup[];
  spendingGroups?: DBSpendingGroup[];
}

export interface DBSpendingGroup {
  id: number;
  groupName: string;
}
