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
   * Gets all volunteers
   * @returns {Promise<[any , Volunteer[]]>}
   */
  public getVolunteers() : Promise<[any, Volunteer[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Volunteers')
        .map(this.toSuppressedJson)
        .map(volunteers => volunteers ? this.mapArray<Volunteer>(Volunteer, volunteers) : null)
        .toPromise()
    );
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

  // TODO: enable searching via first,last,dob
  // /**
  //  * Finds a volunteer with the specified parameters
  //  *
  //  * @param {string} firstName
  //  * @param {string} lastName
  //  * @param {string} birthDate
  //  * @returns {Promise<Volunteer>}
  //  */
  // public find(firstName : string, lastName : string, birthDate : string) : Promise<[any, Volunteer]> {
  //   return this.wrapErrorHandler(
  //     this.http
  //       .get(`${BaseService.Url}/Volunteers/Find?firstName=${firstName}&lastName=${lastName}&birthdate=${birthDate}`)
  //       .map(this.toSuppressedJson)
  //       .map(volunteer => volunteer ? new Volunteer(volunteer) : null)
  //       .catch(this.onError)
  //       .toPromise()
  //   );
  // }

  /**
   * Finds a volunteer with the specified parameters
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} birthDate
   * @returns {Promise<Volunteer>}
   */
  public find(lastName : string, dob : string, phoneNumber : string) : Promise<[any, Volunteer]> {
    return this.wrapErrorHandler(
      this.http
        .get(`${BaseService.Url}/Volunteers/Find?lastName=${lastName}&phoneNumber=${phoneNumber}&birthdate=${dob}`)
        .map(this.toSuppressedJson)
        .map(volunteer => volunteer ? new Volunteer(volunteer) : null)
        .catch(this.onError)
        .toPromise()
    );
  }
}
