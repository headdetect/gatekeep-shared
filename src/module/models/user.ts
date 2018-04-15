import {Person} from "./person";

export class User extends Person {

  public userId: string;

  // User info //

  public username: string;

  public password: string; // Should just be populated on post only. //

  public email: string;

  public permissionGroup: string;

  constructor(attributes: any = {}) {
    super(attributes);
  }
}
