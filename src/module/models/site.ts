import {BaseModel} from "./base-model";

export class Site extends BaseModel {

  /**
   * The site location name.
   * For example: "GateKeep Elementary"
   */
  public name : string;

  /**
   * A url/path to the branding image
   */
  public image : string;

  constructor(attributes: any) {
    super(attributes);
  }
}
