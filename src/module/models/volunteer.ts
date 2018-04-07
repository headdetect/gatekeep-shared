import moment from "moment";
import {Person} from "./person";

export class Volunteer extends Person {

  public volunteerId?: number;
  public applicationDate?: moment.Moment;
  public applicationStatus?: string;

  // User info //

  public username: string;

  public password: string; // Should just be populated on post only. //

  public email: string;

  constructor(attributes: any = {}) {
    super(attributes);

    if (attributes.hasOwnProperty('applicationDate') && attributes.applicationDate) {
      this.applicationDate = moment(attributes.applicationDate);
    }
  }
}
