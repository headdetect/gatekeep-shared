import {BaseModel} from "./base-model";

export class Person extends BaseModel {

  public personId?: number;
  public firstName?: string;
  public middleName?: string;
  public lastName?: string;
  public gender?: string;
  public birthdate?: string;
  public addresses?: string[];
  public phoneNumbers?: string[];

  constructor(attributes: any) {
    super(attributes);
  }
}
