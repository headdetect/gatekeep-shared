import {BaseModel} from "./base-model";
import {Address} from "./address";
import {PhoneNumber} from "./phone-number";
import * as moment from "moment";

export class Person extends BaseModel {

  public personId?: number;
  public firstName?: string;
  public middleName?: string;
  public lastName?: string;
  public gender?: string;
  public birthdate?: moment.Moment;
  public addresses?: Array<Address>;
  public phoneNumbers?: Array<PhoneNumber>;

  constructor(attributes : any = {}) {
    super(attributes);

    if (attributes.hasOwnProperty('birthdate') && attributes.birthdate)
      this.birthdate = moment(attributes.birthdate);
  }
}
