import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Volunteer} from "../models/volunteer";

@Injectable()
export class VolunteerService extends BaseService {

  constructor(public http : Http) {
    super();
  }


  /**
   * Finds a volunteer with the specified parameters
   *
   * @param {string} lastName
   * @param {string} birthDate
   * @param {string} phoneNumber
   * @returns {Promise<Volunteer>}
   */
  public find(lastName : string, birthDate : string, phoneNumber : string) : Promise<Volunteer> {
    return this.http
      .get(`${BaseService.Url}/Volunteers/Find?lastName=${lastName}&birthDate=${birthDate}&phoneNumber=${phoneNumber}`)
      .map(this.toJson)
      .catch(this.onError)
      .map(volunteer => volunteer ? new Volunteer(volunteer) : null)
      .toPromise();
  }
}
