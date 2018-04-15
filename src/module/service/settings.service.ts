import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Person} from "../models/person";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import moment from "moment";
import {Setting} from "../models/setting";
import {SiteEvent} from "../models";

@Injectable()
export class SettingsService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  /**
   * Save the specified settings batch
   *
   * @returns {Promise<[any, Setting[]]>}
   */
  public saveOrganizationSettings(postSettings: Setting[]): Promise<[any, Setting[]]> {
    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + '/Settings', postSettings, this.options())
        .map(this.toSuppressedJson)
        .map(settings => settings ? this.mapArray<Setting>(Setting, settings) : null)
        .toPromise()
    );
  }

  /**
   * Gets the settings for the whole organization
   *
   * @returns {Promise<[any , Setting[]]>}
   */
  public getOrganizationSettings(): Promise<[any, Setting[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Settings', this.options())
        .map(this.toSuppressedJson)
        .map(settings => settings ? this.mapArray<Setting>(Setting, settings) : null)
        .toPromise()
    );
  }

  /**
   * Save the settings batch for the respective sites
   *
   * @returns {Promise<[any, Setting[]]>}
   */
  public saveSiteSettings(postSettings: Setting[]): Promise<[any, Setting[]]> {
    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + '/Settings/Site', postSettings, this.options())
        .map(this.toSuppressedJson)
        .map(settings => settings ? this.mapArray<Setting>(Setting, settings) : null)
        .toPromise()
    );
  }

  /**
   * Gets the settings for the specified site
   *
   * @param {number} siteId
   * @returns {Promise<[any , Setting[]]>}
   */
  public getSiteSettings(siteId: number): Promise<[any, Setting[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Settings/Site/' + siteId, this.options())
        .map(this.toSuppressedJson)
        .map(settings => settings ? this.mapArray<Setting>(Setting, settings) : null)
        .toPromise()
    );
  }
}
