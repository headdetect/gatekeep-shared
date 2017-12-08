import moment from "moment";
import {Person} from "./person";

export class Visitor extends Person {

  public id?: number;
  public checkInDateTime?: moment.Moment;

  constructor(attributes: any) {
    super(attributes);
  }
}
