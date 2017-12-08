import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Injectable} from "@angular/core";
import {BaseModel} from "../models/base-model";

@Injectable()
export class BaseService {

  /**
   * The URL for the GateKeep API
   * @type {string}
   */
  public static Url = "http://gatekeep-dev.azurewebsites.net";

  /**
   * Converts the response into a proper json response.
   *
   * @param {Response} response
   * @returns {any}
   */
  protected toJson(response : Response) {
    return response.json() || {};
  }

  /**
   * Reads from the "errors" property if it exists then throws that observable error
   * @param error
   * @returns {any}
   */
  protected onError (error: any) {
    if (!error.json) return Observable.throw(error);

    const errJson = error.json();

    if (errJson) {
      return Observable.throw( errJson.message || errJson.errors);
    }

    return Observable.throw('unknown error');
  }

  protected mapArray<T extends BaseModel>(constructorT : BaseServiceConstructor<T>, input : any) : Array<T> {
    return input.map((entry : any) => new constructorT(entry));
  }
}

export interface BaseServiceConstructor<T extends BaseModel> {
  new (attributes : any) : T;
}

