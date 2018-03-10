import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Person} from "../models/person";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Site} from "../models/site";

@Injectable()
export class SiteService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  /**
   * Get's the specified site
   *
   * @returns {Promise<Person[]>}
   */
  public getSite(siteId: number) : Promise<[any, Site]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Site').map(this.toSuppressedJson)
        .toPromise()
    );
  }

  public getSites(): Promise<[any, Site[]]> {
    return null;
  }
}
