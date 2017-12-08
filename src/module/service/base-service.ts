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
   * Converts the response into a proper json response.
   *
   * Will supress any errors
   *
   * @param {Response} response
   * @returns {any}
   */
  protected toSuppressedJson(response : Response) {
    console.log(response);

    if (!response.ok || response.text() === "") return null;

    return response.json() || {};
  }

  /**
   * Reads from the "errors" property if it exists then throws that observable error
   * @param error
   * @returns {any}
   */
  protected onError (error: any) {
    if (error._body === "") return ErrorObservable.create(error.statusText);

    if (!error.json) return ErrorObservable.create(error);

    const errJson = error.json();

    if (errJson) {
      return ErrorObservable.create( errJson.message || errJson.errors);
    }

    return ErrorObservable.create('unknown error');
  }

  protected mapArray<T extends BaseModel>(constructorT : BaseServiceConstructor<T>, input : any) : Array<T> {
    return input.map((entry : any) => new constructorT(entry));
  }

  /**
   * Will suppress any errors.
   * @returns {any}
   * @param error
   * @param next
   */
  protected suppressError(error: any, next : Observable<any>) {

  }
}

export interface BaseServiceConstructor<T extends BaseModel> {
  new (attributes : any) : T;
}

