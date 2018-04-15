import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {SiteEvent} from "../models/site-event";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import * as moment from "moment";
import {Visitor} from "../models/visitor";

@Injectable()
export class VisitorService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  public getVisitors() : Promise<[any, Visitor[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + "/Visitors", this.options())
        .map(this.toSuppressedJson)
        .map(visitors => visitors ? this.mapArray<Visitor>(Visitor, visitors) : null)
        .toPromise()
    );
  }

  public deleteVisitor(visitorId : number) : Promise<[any]> {
    return this.wrapErrorHandler(
      this.http.delete(BaseService.Url + "/Visitors/" + visitorId, this.options())
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

  public getVisitor(visitorId : number) : Promise<[any, Visitor]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + "/Visitors/" + visitorId, this.options())
        .map(this.toSuppressedJson)
        .map(attrs => attrs ? new Visitor(attrs) : null)
        .toPromise()
    );
  }

  public updateVisitor(visitor : Visitor) : Promise<[any, Visitor]> {
    if (visitor === null)
      return Promise.reject("visitor specified was null");

    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + "/Visitors/" + visitor.visitorId, visitor, this.options())
        .map(this.toJson)
        .map(attrs => attrs ? new Visitor(attrs) : null)
        .toPromise()
    );
  }

  /**
   * Creates a log entry with the specified visitor
   *
   * @param {Visitor} visitor
   * @returns {Promise<any>}
   */
  public logVisitor(visitor : Visitor) : Promise<[any, Visitor]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + "/Visitors", visitor, this.options())
        .map(this.toSuppressedJson)
        .map(attrs => attrs ? new Visitor(attrs) : null)
      .toPromise()
    );
  }

}
