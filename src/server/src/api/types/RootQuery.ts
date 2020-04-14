import { User } from './User';
import getUser from '../queries/getUser';

export const RootQueryType = `
	type Query {
		user(id: Int): User
	}
`;

export class RootQuery {
  // TODO: Replace any type with a meaningful type
  user(args: any): User {
    return getUser(args.id);
  }
}
