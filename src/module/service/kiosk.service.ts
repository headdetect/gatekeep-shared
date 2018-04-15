import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Person, SiteEvent} from "../models";
import {BaseService} from "./base-service";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import {Site} from "../models";
import {Kiosk} from "../models/kiosk";

@Injectable()
export class KioskService extends BaseService {

  constructor(public http : Http) {
    super();
  }

  public getKiosk(kioskId: string) : Promise<[any, Kiosk]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Kiosk/' + kioskId, this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? new Kiosk(event) : null)
        .toPromise()
    );
  }

  public getKiosks() : Promise<[any, Kiosk[]]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Kiosk/', this.options())
        .map(this.toSuppressedJson)
        .map(kiosks => kiosks ? this.mapArray<Kiosk>(Kiosk, kiosks) : null)
        .toPromise()
    );
  }

  public createKiosk(kiosk: Kiosk): Promise<[any, Kiosk]> {
    return this.wrapErrorHandler(
      this.http.post(BaseService.Url + '/Kiosk', kiosk, this.options())
        .map(this.toSuppressedJson)
        .map(newKiosk => newKiosk ? new Kiosk(newKiosk) : null)
        .toPromise()
    );
  }

  public deletekiosk(kioskId: string): Promise<[any, any]> {
    return this.wrapErrorHandler(
      this.http.delete(BaseService.Url + '/Kiosk/' + kioskId, this.options())
        .map(this.toSuppressedJson)
        .toPromise()
    );
  }

  public kioskIdExists(kioskId: string) : Promise<[any, boolean]> {
    return this.wrapErrorHandler(
      this.http.get(BaseService.Url + '/Kiosk/Exists?kioskId=' + kioskId, this.options())
        .map(this.toSuppressedJson)
        .map(event => event ? event.exists : null)
        .toPromise()
    );
  }

}
