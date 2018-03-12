import {BaseModel} from "./base-model";

export class Setting extends BaseModel {

  public siteId?: number;

  public id?: number;

  public key: string;

  public value: string;

  constructor(attributes: any) {
    super(attributes);
  }
}
