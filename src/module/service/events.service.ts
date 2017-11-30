import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {SiteEvent} from "../models/site-event";

@Injectable()
export class EventsService {

  constructor(public http : Http) { }

  public async getEvents() : Promise<SiteEvent[]> {
    return await [ new SiteEvent() ];
  }
}
