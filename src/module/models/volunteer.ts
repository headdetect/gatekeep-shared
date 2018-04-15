import moment from "moment";
import {Person} from "./person";
import {User} from "./user";

export class Volunteer extends User {

  public volunteerId?: number;
  public applicationDate?: moment.Moment | Date;
  public applicationStatus?: string;

  constructor(attributes: any = {}) {
    super(attributes);

    if (attributes.hasOwnProperty('applicationDate') && attributes.applicationDate) {
      this.applicationDate = moment(attributes.applicationDate);
    }
  }
}
