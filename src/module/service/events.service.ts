import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {SiteEvent} from "../models/site-event";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Person} from "../models/person";

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
        .map(this.toSuppressedJson)
        .map(events => events ? this.mapArray<SiteEvent>(SiteEvent, events) : null)
        .catch(this.onError)
        .toPromise();
  }

  /**
   * Create an event with the specified parameters.
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
      .map(event => event ? new SiteEvent(event) : null)
      .toPromise();
  }

  public addAttendees(siteEventId : number, personIds : Array<number>) : Promise<any> {
    return this.http.post(BaseService.Url + '/Events/' + siteEventId + '/Attendees', `[${personIds.join(',')}]`)
      .toPromise();
  }

  public addAttendee(siteEventId : number, personId : number) : Promise<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(BaseService.Url + '/Events/' + siteEventId + '/Attendees', `[${personId}]`, options)
      .toPromise();
  }

  public getAttendees(siteEventId : number) : Promise<Array<Person>> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(BaseService.Url + '/Events/' + siteEventId + '/Attendees', options)
      .map(this.toJson)
      .map(attendees => attendees ? this.mapArray<Person>(Person, attendees) : null)
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
