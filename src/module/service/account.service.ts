import {BaseService} from "./base-service";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {User} from "../models";

@Injectable()
export class AccountService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  public login(username : string, password : string) : Promise<[any, {permissions: string[], user: User}]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Account/Login', {
        username: username,
        password: password
      }, this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? {permissions: event.permissions, user: new User(event.user)} : null)
        .toPromise()
    );
  }

  public logout() : Promise<[any]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Account/Logout', {}, this.options())
      .toPromise()
    );
  }

  public authenticated() : Promise<[any, boolean]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Account/Authenticated', this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? event.authenticated : null)
        .toPromise()
    );
  }
}
