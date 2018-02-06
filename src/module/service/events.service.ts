import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {SiteEvent} from "../models/site-event";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Person} from "../models/person";
import moment from "moment";

@Injectable()
export class EventsService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  /**
   * Get's all events for this authorized user
   *
   * @returns {Promise<[any, SiteEvent[]]>}
   */
  public getEvents(
    rangeStart : moment.Moment = moment(),
    rangeEnd : moment.Moment = moment().add(1, 'month')
  ) : Promise<[any, SiteEvent[]]> {
    return this.wrapErrorHandler(
      this.http.get(`${BaseService.Url}/Events?filterStartDate=${rangeStart.format('L')}&filterEndDate=${rangeEnd.format('L')}`)
      .map(this.toSuppressedJson)
      .map(events => events ? this.mapArray<SiteEvent>(SiteEvent, events) : null)
      .toPromise()
    )
  }

  /**
   * Create an event with the specified parameters.
   *
   * @returns {Promise<SiteEvent>}
   * @param siteEvent
   */
  public createEvent(siteEvent : SiteEvent) : Promise<[any, SiteEvent]> {
    if (siteEvent === null)
      return Promise.reject("siteEvent specified was null");

    // const attributes = {
    //   title : siteEvent.title,
    //   description: "",
    //   location : siteEvent.location,
    //   startDate : siteEvent.date.format(),
    //   endDate : siteEvent.endDate.format(),
    //   maxVolunteersAllowed : siteEvent.maxVolunteersAllowed || 0
    // };

    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Events', siteEvent)
      .map(this.toJson)
      .map(event => event ? new SiteEvent(event) : null)
      .toPromise()
    );
  }

  /**
   * Update an event with the specified parameters.
   *
   * @returns {Promise<SiteEvent>}
   * @param siteEvent
   */
  public updateEvent(siteEvent : SiteEvent) : Promise<[any, SiteEvent]> {
    if (siteEvent === null)
      return Promise.reject("siteEvent specified was null");

    // const attributes = {
    //   eventId: siteEvent.eventId,
    //   title : siteEvent.title,
    //   description: "",
    //   location : siteEvent.location,
    //   startDate : siteEvent.date.format(),
    //   endDate : siteEvent.endDate.format(),
    //   maxVolunteersAllowed : siteEvent.maxVolunteersAllowed || 0
    // };

    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + '/Events/' + siteEvent.eventId, siteEvent)
        .map(this.toJson)
        .map(event => event ? new SiteEvent(event) : null)
        .toPromise()
    );
  }

  public addAttendees(siteEventId : number, personIds : number[]) : Promise<[any, any]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Events/' + siteEventId + '/Attendees', `[${personIds.join(',')}]`)
      .toPromise()
    );
  }

  public addAttendee(siteEventId : number, personId : number) : Promise<[any, any]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Events/' + siteEventId + '/Attendees', `[${personId}]`, options)
      .toPromise()
    );
  }

  public getAttendees(siteEventId : number) : Promise<[any, Person[]]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Events/' + siteEventId + '/Attendees', options)
      .map(this.toJson)
      .map(attendees => attendees ? this.mapArray<Person>(Person, attendees) : null)
      .toPromise()
    );
  }

  public removeAttendee(siteEventId : number, personId : number) : Promise<[any, any]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.wrapErrorHandler(
      this.http.delete(BaseService.Url + '/Events/' + siteEventId + '/Attendees', options)
        .map(this.toJson)
        .map(attendees => attendees ? this.mapArray<Person>(Person, attendees) : null)
        .toPromise()
    );
  }


  /**
   * Deletes (archives really) the specified event.
   *
   * @param {number} eventId
   * @returns {Promise<any>}
   */
  public deleteEvent(eventId : number) : Promise<[any, any]> {
    return this.wrapErrorHandler(
      this.http.delete(BaseService.Url + '/Events/' + eventId)
      .toPromise()
    );
  }
}
