export interface DBUser {
  id: number;
  username: string;
  spendingGroupsId?: number[];
}

export interface DBSpendingGroup {
  id: number;
  groupName: string;
}
