import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {SiteEvent} from "../models/site-event";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Injectable()
export class EventsService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  /**
   * Get's all events for this authorized user
   *
   * @returns {Promise<SiteEvent[]>}
   */
  public getEvents() : Promise<SiteEvent[]> {
      return this.http.get(BaseService.Url + '/Events')
        .map(this.toJson)
        .map(events => this.mapArray<SiteEvent>(SiteEvent, events))
        .toPromise();
  }

  /**
   * Create an event with the specified parameters.
   *
   *
   * Example of accepted parameters:
   *
   * {
   *   title : string,
   *   description: string,
   *   location : string,
   *   startDate : moment.Moment,
   *   endDate : moment.Moment,
   *   maxVolunteersAllowed : number
   * }
   *
   * @returns {Promise<SiteEvent>}
   * @param siteEvent
   */
  public createEvent(siteEvent : SiteEvent) : Promise<SiteEvent> {
    if (siteEvent === null)
      return Promise.reject("siteEvent specified was null");

    const attributes = {
      title : siteEvent.title,
      description: "",
      location : siteEvent.location,
      startDate : siteEvent.startDate.format(),
      endDate : siteEvent.endDate.format(),
      maxVolunteersAllowed : siteEvent.maxVolunteersAllowed
    };

    return this.http.post(BaseService.Url + '/Events', attributes)
      .map(this.toJson)
      .map(event => new SiteEvent(event))
      .toPromise();
  }

  /**
   * Deletes (archives really) the specified event.
   *
   * @param {number} eventId
   * @returns {Promise<any>}
   */
  public deleteEvent(eventId : number) : Promise<any> {
    return this.http.delete(BaseService.Url + '/Events/' + eventId)
      .toPromise();
  }
}
