import {BaseModel} from "./base-model";

export class PhoneNumber extends BaseModel {

  public id?: number;
  public number?: string;
  public type?: string;

  constructor(attributes: any) {
    super(attributes);
  }
}
