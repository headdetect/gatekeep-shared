import {BaseModel} from "./base-model";
import {Address} from "./address";

export class Organization extends BaseModel {

  public organizationId: number;

  public address: Address;

  public name: string;

  constructor(attributes: any) {
    super(attributes);
  }
}
