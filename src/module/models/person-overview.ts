import {BaseModel} from "./base-model";
import {Address} from "./address";
import {PhoneNumber} from "./phone-number";
import moment from "moment";
import {Person} from "./person";

export class PersonOverview extends Person {

  /**
   * The events that this person is apart of
   */
  public events?: number[];

  constructor(attributes : any = {}) {
    super(attributes);
  }
}
