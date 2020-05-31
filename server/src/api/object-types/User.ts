import { IDBUser } from '../../interfaces/types';

export default class User {
  public id: string;
  public name: string;
  public email: string;

  constructor(dbUser: IDBUser) {
    this.id = dbUser.id;
    this.name = dbUser.name;
    this.email = dbUser.email;
  }
}
