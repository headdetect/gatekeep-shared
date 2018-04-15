import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {SiteEvent, Volunteer} from "../models";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Person} from "../models";
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
    rangeEnd : moment.Moment = moment().add(1, 'month'),
    includePrivate: boolean = false
  ) : Promise<[any, SiteEvent[]]> {
    return this.wrapErrorHandler(
      this.http.get(`${BaseService.Url}/Events?filterStartDate=${rangeStart.format('L')}&filterEndDate=${rangeEnd.format('L')}`,
        this.options())
      .map(this.toSuppressedJson)
      .map(events => events ?
        this.mapArray<SiteEvent>(SiteEvent, events)
            .filter(e => !e.isPrivateEvent || includePrivate) : null
      )
      .toPromise()
    )
  }

  /**
   * Get specified event for this authorized user
   *
   * @returns Promise<[any, SiteEvent]>
   */
  public getEvent(eventId: number) : Promise<[any, SiteEvent]> {
    return this.wrapErrorHandler(
      this.http.get(`${BaseService.Url}/Events/${eventId}`,
        this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? new SiteEvent(event) : null)
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

    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Events', siteEvent, this.options())
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

    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + '/Events/' + siteEvent.eventId, siteEvent, this.options())
        .map(this.toJson)
        .map(event => event ? new SiteEvent(event) : null)
        .toPromise()
    );
  }

  public addAttendees(siteEventId : number, personIds : number[], rsvp: boolean = false) : Promise<[any, any]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Events/' + siteEventId + '/Attendees',
        `{persons: [${personIds.join(',')}], rsvp: ${rsvp}}`, this.options())
      .toPromise()
    );
  }

  public addAttendee(siteEventId : number, personId : number, rsvp: boolean = false) : Promise<[any, any]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Events/' + siteEventId + '/Attendees',
        `{persons: [${personId}], rsvp: ${rsvp}}`, this.options(options))
      .toPromise()
    );
  }

  public getAttendees(siteEventId : number) : Promise<[any, Person[]]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Events/' + siteEventId + '/Attendees', this.options(options))
      .map(this.toJson)
      .map(attendees => attendees ? this.mapArray<Person>(Person, attendees) : null)
      .toPromise()
    );
  }

  public removeAttendee(siteEventId : number, personId : number) : Promise<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, body: `[${personId}]` });

    return this.wrapErrorHandler(
      this.http.delete(BaseService.Url + '/Events/' + siteEventId + '/Attendees', this.options(options))
        .toPromise()
    );
  }


  public addVolunteers(siteEventId : number, volunteerIds : number[], rsvp: boolean = false) : Promise<[any, any]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });


    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Events/' + siteEventId + '/Volunteers',
        `{volunteerIds: [${volunteerIds.join(',')}], rsvp: ${rsvp}}`, this.options(options))
        .toPromise()
    );
  }

  public addVolunteer(siteEventId : number, volunteerId : number, rsvp: boolean = false) : Promise<[any, any]> {
    return this.addVolunteers(siteEventId, [volunteerId], rsvp);
  }

  public getVolunteers(siteEventId : number) : Promise<[any, Person[]]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Events/' + siteEventId + '/Volunteers', this.options(options))
        .map(this.toJson)
        .map(attendees => attendees ? this.mapArray<Volunteer>(Volunteer, attendees) : null)
        .toPromise()
    );
  }

  public removeVolunteer(siteEventId : number, volunteerId : number) : Promise<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, body: `[${volunteerId}]` });

    return this.wrapErrorHandler(
      this.http.delete(BaseService.Url + '/Events/' + siteEventId + '/Volunteers', this.options(options))
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
      this.http.delete(BaseService.Url + '/Events/' + eventId, this.options())
      .toPromise()
    );
  }
}
