import { IDBUser } from '../../interfaces/types';

const UserType = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

class User {
  public id: string;
  public name: string;
  public email: string;

  constructor(dbUser: IDBUser) {
    this.id = dbUser.id;
    this.name = dbUser.name;
    this.email = dbUser.email;
  }
}

export { UserType, User };
