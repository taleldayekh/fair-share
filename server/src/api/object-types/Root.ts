import User from '../object-types/User';
import { GetUserArgs, CreateUserArgs } from '../../models/user';
import getUserByEmail from '../queries/user/getUserByEmail';
import createUser from '../mutations/user/createUser';

export default class Root {
  // Queries
  async userByEmail(args: GetUserArgs): Promise<User> {
    return await getUserByEmail(args.email);
  }

  // Mutations
  async createUser(args: CreateUserArgs): Promise<User> {
    return await createUser(args.name, args.email);
  }
}
