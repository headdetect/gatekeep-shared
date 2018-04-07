import {BaseModel} from "./base-model";

export class Address extends BaseModel {

  public addressId?: number;
  public street1?: string;
  public street2?: string;
  public city?: string;
  public state?: string;
  public zip?: string;
  public type?: string;

  public toString(): string {
    return `${this.street1}${this.street2 ? ' ' + this.street2: ''}, ${this.city} ${this.state}, ${this.zip}`;
  }

  constructor(attributes: any) {
    super(attributes);
  }
}
