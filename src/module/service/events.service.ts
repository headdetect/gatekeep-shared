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

  public getEvents() : Promise<SiteEvent[]> {
      return this.http.get(BaseService.Url + '/Events')
        .map(this.toJson)
        .map(events => events.map((event : any) => event as SiteEvent))
        .toPromise();
  }
}
