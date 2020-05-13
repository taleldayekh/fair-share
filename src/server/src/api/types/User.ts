// import { IDBUser } from '../../interfaces/types';

const UserType = `
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

  constructor(dbUser: any) {
    this.id = dbUser.id;
    this.name = dbUser.name;
    this.email = dbUser.email;
  }
}

export { UserType, User };
