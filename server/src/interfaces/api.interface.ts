import { DBUser, DBSpendingGroup, DBSpending } from './models.interface';

export type User = DBUser;

export type SpendingGroup = DBSpendingGroup;

export type Spending = DBSpending;

type UserByEmailQuery = (args: GetUserArgs) => Promise<User>;

type CreateUserMutation = (args: CreateUserArgs) => Promise<User>;

type CreateSpendingGroupMutation = (
  args: CreateSpendingGroupArgs,
) => Promise<SpendingGroup>;

type NewSpendingMutation = (args: NewSpendingArgs) => Promise<Spending>;

export interface GetUserArgs {
  email: string;
}

export interface CreateUserArgs {
  name: string;
  email: string;
}

export interface CreateSpendingGroupArgs {
  userId: string;
  name: string;
}

export interface NewSpendingArgs {
  userId: string;
  spendingGroupId: string;
  label: string;
  amount: number;
}

export interface RootType {
  userByEmail: UserByEmailQuery;
  createUser: CreateUserMutation;
  createSpendingGroup: CreateSpendingGroupMutation;
  newSpending: NewSpendingMutation;
}
