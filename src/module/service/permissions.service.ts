import {BaseService} from "./base-service";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Person, User} from "../models";
import {PermissionGroup} from "../models/permission-group";

@Injectable()
export class PermissionsService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  public createGroup(permissionGroup: PermissionGroup) : Promise<[any, PermissionGroup]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Permissions/Group', permissionGroup, this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? new PermissionGroup(event) : null)
        .toPromise()
    );
  }

  public updateGroup(permissionGroup: PermissionGroup) : Promise<[any, PermissionGroup]> {
    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + '/Permissions/Group/' + permissionGroup.permissionGroupId, permissionGroup, this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? new PermissionGroup(event) : null)
        .toPromise()
    );
  }

  public updateGroupPermissions(permissionGroup: PermissionGroup) : Promise<[any, PermissionGroup]> {
    return this.wrapErrorHandler(
      this.http.put(BaseService.Url + '/Permissions/Group/' + permissionGroup.permissionGroupId + '/Permissions',
        permissionGroup.permissions, this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? new PermissionGroup(event) : null)
        .toPromise()
    );
  }

  public deleteGroup(permissionGroup: PermissionGroup) : Promise<[any, PermissionGroup]> {
    return this.wrapErrorHandler(
      this.http.delete(BaseService.Url + '/Permissions/Group/' + permissionGroup.permissionGroupId, this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? new PermissionGroup(event) : null)
        .toPromise()
    );
  }

  public getGroups() : Promise<[any, PermissionGroup[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Permissions/Group', this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? this.mapArray<PermissionGroup>(PermissionGroup, event) : null)
        .toPromise()
    );
  }

  public getPermissions() : Promise<[any, string[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Permissions', this.options())
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }
}
