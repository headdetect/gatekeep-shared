import {BaseModel} from "./base-model";

export class Address extends BaseModel {

  public addressId?: number;
  public street1?: string;
  public street2?: string;
  public city?: string;
  public state?: string;
  public zip?: string;
  public type?: string;

  constructor(attributes: any) {
    super(attributes);
  }
}
