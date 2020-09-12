import getUserByEmail from './app-user/use-cases/queries/getUserByEmail';
import newUser from './app-user/use-cases/mutations/createUser';
import newSpendingGroup from './app-spending-group/use-cases/mutations/createSpendingGroup';
import addSpending from './app-spending/use-cases/mutations/newSpending';
import { user } from './app-user/user';
import { spendingGroup } from './app-spending-group/spendingGroup';
import { spending } from './app-spending/spending';
import { GetUserArgs, CreateUserArgs } from '../models/user';
import { CreateSpendingGroupArgs } from '../models/spendingGroup';
import { SpendingArgs } from '../models/spending';
import { IUser, ISpendingGroup, ISpending } from '../interfaces/types';

/* istanbul ignore file */
export const root = () => {
  // Queries
  const userByEmail = async (
    args: GetUserArgs,
    _: any,
    __: any,
  ): Promise<IUser> => {
    return user(await getUserByEmail(args.email));
  };

  // Mutations
  const createUser = async (
    args: CreateUserArgs,
    _: any,
    __: any,
  ): Promise<IUser> => {
    return user(await newUser(args.name, args.email));
  };

  const createSpendingGroup = async (
    args: CreateSpendingGroupArgs,
    _: any,
    __: any,
  ): Promise<ISpendingGroup> => {
    return spendingGroup(await newSpendingGroup(args.userId, args.name));
  };

  const newSpending = async (
    args: SpendingArgs,
    _: any,
    __: any,
  ): Promise<ISpending> => {
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
