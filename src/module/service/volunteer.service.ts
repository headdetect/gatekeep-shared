import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Injectable()
export class VolunteerService extends BaseService {

  constructor(public http : Http) {
    super();
  }

}
