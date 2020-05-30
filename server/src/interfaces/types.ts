export interface IDBUser {
  id: string;
  name: string;
  email: string;
}

export interface IDBSpendingGroup {
  id: string;
  name: string;
  ownerId: string;
  participants: ISpendingGroupParticipant[];
  totalGroupSpending: number;
}

export interface ISpendingGroupParticipant {
  id: string;
  name: string;
  email: string;
  totalParticipantSpending: number;
}
