import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class EventsService {

  constructor(public http : Http) { }

  getEvents() : Event {
    return `Hello ${name || 'Stanger'}!`;
  }
}
