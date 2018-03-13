import {BaseService} from "./base-service";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Organization} from "../models/organization";

@Injectable()
export class OrganizationService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  /**
   * Gets the main organization for this account
   *
   * @returns {any}
   */
  public getOrganization(): Promise<[any, Organization]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Organization')
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

  public updateOrganization(organization: Organization): Promise<any> {
    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + '/Organization', organization)
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }
}
