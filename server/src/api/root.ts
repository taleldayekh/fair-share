import getUserByEmail from './app-user/use-cases/queries/getUserByEmail';
import newUser from './app-user/use-cases/mutations/createUser';
import newSpendingGroup from './app-spending-group/use-cases/mutations/createSpendingGroup';
import addSpending from './app-spending/use-cases/mutations/newSpending';
import { user } from './app-user/user';
import { spendingGroup } from './app-spending-group/spendingGroup';
import { spending } from './app-spending/spending';
import {
  RootType,
  GetUserArgs,
  CreateUserArgs,
  CreateSpendingGroupArgs,
  NewSpendingArgs,
  User,
  SpendingGroup,
  Spending,
} from '../interfaces/api.interface';

/* istanbul ignore file */
export const root = (): RootType => {
  // Queries
  const userByEmail = async (args: GetUserArgs): Promise<User> => {
    return user(await getUserByEmail(args.email));
  };

  // Mutations
  const createUser = async (args: CreateUserArgs): Promise<User> => {
    return user(await newUser(args.name, args.email));
  };

  const createSpendingGroup = async (
    args: CreateSpendingGroupArgs,
  ): Promise<SpendingGroup> => {
    return spendingGroup(await newSpendingGroup(args.userId, args.name));
  };

  const newSpending = async (args: NewSpendingArgs): Promise<Spending> => {
    return spending(
      await addSpending(
        args.userId,
        args.spendingGroupId,
        args.label,
        args.amount,
      ),
    );
  };

  return {
    userByEmail,
    createUser,
    createSpendingGroup,
    newSpending,
  };
};
