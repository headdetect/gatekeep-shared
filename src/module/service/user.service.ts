import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Person, SiteEvent} from "../models";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Site} from "../models";
import {Kiosk} from "../models/kiosk";
import {User} from "../models/user";

@Injectable()
export class UserService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  public getUserByPersonId(personId: number) : Promise<[any, User]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Users/ByPerson/' + personId)
        .map(this.toSuppressedJson)
        .map(event => event ? new User(event) : null)
        .toPromise()
    );
  }

  public getUser(userId: string) : Promise<[any, User]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Users/' + userId)
        .map(this.toSuppressedJson)
        .map(event => event ? new User(event) : null)
        .toPromise()
    );
  }

  public getUsers() : Promise<[any, User[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Users/')
        .map(this.toSuppressedJson)
        .map(event => event ? this.mapArray<User>(User, event) : null)
        .toPromise()
    );
  }

  public createUser(user: User) : Promise<[any, User]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Users/', user)
        .map(this.toSuppressedJson)
        .map(event => event ? new User(event) : null)
        .toPromise()
    );
  }

  public userNameExists(username: string) : Promise<[any, boolean]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Users/Exists?username=' + username)
        .map(this.toSuppressedJson)
        .map(event => event ? event.exists : null)
        .toPromise()
    );
  }

  public updateEmail(userId: string, newEmail: string): Promise<[any, any]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Users/' + userId, newEmail)
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

  public updatePassword(userId: string, oldPassword: string, newPassword: string): Promise<[any, any]> {
    const passwords = {
      currentPassword: oldPassword,
      newPassword: newPassword
    };

    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Users/' + userId + '/Password', passwords)
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

}
