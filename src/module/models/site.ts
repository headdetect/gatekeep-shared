import {BaseModel} from "./base-model";
import {Address} from "./address";

export class Site extends BaseModel {

  /**
   * The site location name.
   * For example: "GateKeep Elementary"
   */
  public name : string;

  public address: Address;

  public siteId: number;

  constructor(attributes: any) {
    super(attributes);
  }
}
