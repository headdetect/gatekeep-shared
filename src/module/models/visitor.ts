import {Address} from "./address";
import * as moment from "moment";
import {PhoneNumber} from "./phone-number";
import {BaseModel} from "./base-model";

export class Visitor extends BaseModel {

  public id?: number;
  public checkInDateTime?: moment.Moment;
  public personId?: number;
  public firstName?: string;
  public middleName?: string;
  public lastName?: string;
  public gender?: string;
  public birthdate?: moment.Moment;
  public addresses?: Array<Address>;
  public phoneNumbers?: Array<PhoneNumber>;

  constructor(attributes: any) {
    super(attributes);
  }
}
