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

    if (this.startDate)
      this.startDate = moment(this.startDate);

    if (this.endDate)
      this.endDate = moment(this.endDate);
  }
}
