export interface DBUser {
  id: string;
  username: string;
  spendingGroupsId?: [string];
}

export interface DBSpendingGroup {
  id: string;
  groupName: string;
}
