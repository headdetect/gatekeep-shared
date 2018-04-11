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

  public login(username : string, password : string) : Promise<[any, User]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Account/Login', {
        username: username,
        password: password
      }, {})
        .map(this.toSuppressedJson)
        .map(event => event ? new User(event) : null)
        .toPromise()
    )
  }

  public logout() : Promise<[any]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Account/Logout', {})
      .toPromise()
    );
  }
}
