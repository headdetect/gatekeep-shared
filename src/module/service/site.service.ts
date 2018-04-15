import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Person} from "../models";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Site} from "../models";

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
      this.http.get(BaseService.Url + '/Site/' + siteId, this.options())
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

  public getSites(): Promise<[any, Site[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Site', this.options())
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

  public updateSite(site: Site) : Promise<[any, Site]> {
    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + '/Site/' + site.siteId, site, this.options())
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

  public createSite(site: Site) : Promise<[any, Site]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Site/', site, this.options())
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

  /**
   * Delete the specified site
   *
   * @returns
   */
  public deleteSite(siteId: number) : Promise<[any, any]> {
    return this.wrapErrorHandler(
      this.http.delete(BaseService.Url + '/Site/' + siteId, this.options())
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }
}
