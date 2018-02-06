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


  public getVolunteers() : Promise<[any, Volunteer[]]> {
    return null;
  }

  public createVolunteer(volunteer : Volunteer) : Promise<[any, Volunteer]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Volunteers', volunteer)
        .map(this.toSuppressedJson)
        .map(attrs => attrs ? new Volunteer(attrs) : null)
        .toPromise()
    )
  }

  public deleteVolunteer(volunteerId : number) : Promise<[any]> {
    return null;
  }

  public getVolunteer(volunteerId : number) : Promise<[any, Volunteer]> {
    return null;
  }

  public updateVolunteer(volunteer : Volunteer) : Promise<[any, Volunteer]> {
    return null;
  }

  /**
   * Finds a volunteer with the specified parameters
   *
   * @param {string} lastName
   * @param {string} birthDate
   * @param {string} phoneNumber
   * @returns {Promise<Volunteer>}
   */
  public find(lastName : string, birthDate : string, phoneNumber : string) : Promise<[any, Volunteer]> {
    return this.wrapErrorHandler(
      this.http
        .get(`${BaseService.Url}/Volunteers/Find?lastName=${lastName}&birthdate=${birthDate}&phoneNumber=${phoneNumber}`)
        .map(this.toSuppressedJson)
        .map(volunteer => volunteer ? new Volunteer(volunteer) : null)
        .catch(this.onError)
        .toPromise()
    );
  }

}
