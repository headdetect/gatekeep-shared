import {Injectable} from '@angular/core';
import {Moment} from 'moment';

@Injectable()
export class SiteEvent {


  public title : string;

  public location : string;

  public start : Moment;

  public end : Moment;

  public creator : string;

  public eventId : number;

  public amountJoined : number;

  public maxJoinable : number;

  constructor(attributes : any = null) {
    if (!attributes) return;

    this.title = attributes['title'];
    this.location = attributes['location'];
    this.start = attributes['start'];
    this.end = attributes['end'];
    this.creator = attributes['creator'];
    this.eventId = attributes['eventId'];
    this.amountJoined = attributes['amountJoined'];
    this.maxJoinable = attributes['maxJoinable'];
  }

  public isFull() {
    return this.amountJoined >= this.maxJoinable;
  }
}
