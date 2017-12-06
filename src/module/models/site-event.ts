import {Injectable} from '@angular/core';
import moment from 'moment';

@Injectable()
export class SiteEvent {

  public title : string;

  public location : string;

  public start : moment.Moment;

  public end : moment.Moment;

  public creator : string;

  public eventId : number;

  public amountJoined : number;

  public maxJoinable : number;

  constructor(attributes : any = null) {
    if (!attributes) return;

    this.title = attributes['title'];
    this.location = attributes['location'];
    this.start = moment(attributes['startDate']);
    this.end = moment(attributes['endDate']);
    this.creator = attributes['creator'];
    this.eventId = attributes['eventId'];
    this.amountJoined = attributes['amountJoined'];
    this.maxJoinable = attributes['maxVolunteersAllowed'];
  }
}
