import { User } from './User';
import getUser from '../queries/getUser';
import createUser from '../mutations/createUser';

export const RootQueryType = `
	type Query {
		user(id: Int): User
	}
`;

export const RootMutationType = `
  type Mutation {
    addUser(username: String): User
  }
`;

export class Root {
  // TODO: Replace any type with a meaningful type
  // Queries
  user(args: any): User {
    return getUser(args.id);
  }
  // TODO: Replace any type with a meaningful type
  // Mutations
  addUser(args: any) {
    return createUser(args.username);
  }
}
