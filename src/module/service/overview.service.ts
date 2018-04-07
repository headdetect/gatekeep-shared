import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {PersonOverview} from "../models/person-overview";

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
  public getOverview(siteId: number) : Promise<[any, PersonOverview[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Overview/' + siteId)
      .map(this.toSuppressedJson)
      .map(overview => overview ? this.mapArray<PersonOverview>(PersonOverview, overview) : null)
      .toPromise()
    );
  }
}
