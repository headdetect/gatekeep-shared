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

  /**
   * Creates a log entry with the specified visitor
   *
   * @param {Visitor} visitor
   * @returns {Promise<any>}
   */
  public logVisitor(visitor : Visitor) : Promise<[any, any]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + "/Visitors", visitor)
        .map(this.toSuppressedJson)
        .map(attrs => attrs ? new Visitor(attrs) : null)
      .toPromise()
    );
  }

}
