import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Person} from "../models/person";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import moment from "moment";

@Injectable()
export class HelpService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  /**
   * Get's overview
   *
   * @returns {Promise<Person[]>}
   */
  public requestHelp(location: string) : Promise<any> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Help', {
        personId: 0,
        location: location
      }).map(this.toSuppressedJson)
        .toPromise()
    );
  }
}
