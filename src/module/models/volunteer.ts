import moment from "moment";
import {Person} from "./person";

export class Volunteer extends Person {

  public volunteerId?: number;
  public applicationDate?: moment.Moment;
  public applicationStatus?: string;

  constructor(attributes: any = {}) {
    super(attributes);

    if (attributes.hasOwnProperty('applicationDate') && attributes.applicationDate) {
      this.applicationDate = moment(attributes.applicationDate);
    }
  }
}
