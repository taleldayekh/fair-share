import getUserByEmail from '../queries/user/getUserByEmail';
import newUser from '../mutations/user/createUser';
import newSpendingGroup from '../mutations/spending-group/createSpendingGroup';
import { user } from '../object-types/user';
import { spendingGroup } from '../object-types/spendingGroup';
import { GetUserArgs, CreateUserArgs } from '../../models/user';
import { CreateSpendingGroupArgs } from '../../models/spendingGroup';
import { IUser } from '../../interfaces/types';
import { ISpendingGroup } from '../../interfaces/types';

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

  return {
    userByEmail,
    createUser,
    createSpendingGroup,
  };
};
