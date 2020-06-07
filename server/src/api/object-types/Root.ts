import User from '../object-types/User';
import { SpendingGroup } from '../object-types/SpendingGroup';
import { GetUserArgs, CreateUserArgs } from '../../models/user';
import { CreateSpendingGroupArgs } from '../../models/spendingGroup';
import getUserByEmail from '../queries/user/getUserByEmail';
import createUser from '../mutations/user/createUser';
import createSpendingGroup from '../mutations/spending-group/createSpendingGroup';

export default class Root {
  // Queries
  async userByEmail(args: GetUserArgs): Promise<User> {
    return await getUserByEmail(args.email);
  }

  // Mutations
  async createUser(args: CreateUserArgs): Promise<User> {
    return await createUser(args.name, args.email);
  }

  async createSpendingGroup(
    args: CreateSpendingGroupArgs,
  ): Promise<SpendingGroup> {
    return await createSpendingGroup(args.userId, args.name);
  }
}
