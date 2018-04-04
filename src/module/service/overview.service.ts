import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Person} from "../models/person";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import moment from "moment";

@Injectable()
export class OverviewService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  /**
   * Gets the site's overview
   *
   * @returns {Promise<Person[]>}
   */
  public getOverview(siteId: number) : Promise<[any, Person[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Overview/' + siteId)
      .map(this.toSuppressedJson)
      .map(overview => overview ? this.mapArray<Person>(Person, overview) : null)
      .toPromise()
    );
  }
}
