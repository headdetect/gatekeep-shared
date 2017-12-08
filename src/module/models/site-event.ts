import {Injectable} from '@angular/core';
import moment from 'moment';
import {BaseModel} from "./base-model";

@Injectable()
export class SiteEvent extends BaseModel {

  public title : string;

  public location : string;

  public startDate : moment.Moment;

  public endDate : moment.Moment;

  public creator : string;

  public eventId : number;

  public amountJoined : number;

  public maxVolunteersAllowed : number;

  constructor(attributes: any) {
    super(attributes);
  }
}
