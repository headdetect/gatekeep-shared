import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {SiteEvent} from "../models/SiteEvent";

@Injectable()
export class EventsService {

  constructor(public http : Http) { }

  getEvents() : Array<SiteEvent> {
    return null;
  }
}
