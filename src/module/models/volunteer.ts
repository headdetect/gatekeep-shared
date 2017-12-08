import moment from "moment";
import {Person} from "./person";

export class Volunteer extends Person {

  public id?: number;

  constructor(attributes: any) {
    super(attributes);
  }
}
