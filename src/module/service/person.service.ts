import {BaseService} from "./base-service";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

import {Person, SiteEvent} from '../models'

@Injectable()
export class PersonService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  public getPerson(personId : number) : Promise<[any, Person]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + "/People/" + personId, this.options())
        .map(this.toSuppressedJson)
        .map(attrs => attrs ? new Person(attrs) : null)
        .toPromise()
    );
  }

  public getPersonsEvents(personId : number) : Promise<[any, SiteEvent[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + "/People/" + personId, this.options())
        .map(this.toSuppressedJson)
        .map(attrs => attrs ? new SiteEvent(attrs) : null)
        .toPromise()
    );
  }
}
