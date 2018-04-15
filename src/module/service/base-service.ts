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
  public static Url : string;

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

  protected options(included: any = {}) {
    return Object.assign(included, { withCredentials: true });
  }

  /**
   *
   * A way to handle errors and objects received from an async/await service call
   *
   * For example:
   *
   * const [error, events] = await this.eventsService.getEvents();
   *
   * In a service:
   *
   *
      public getEvents() : Promise<[any, SiteEvent[]]> {
         return this.wrapErrorHandler(this.http.get(BaseService.Url + '/Events')
           .map(this.toSuppressedJson)
           .map(events => events ? this.mapArray<SiteEvent>(SiteEvent, events) : null)
           .catch(this.onError)
           .toPromise())
      }
   *
   * @param {Promise<any>} promise
   * @returns {Promise<any[] | never>}
   */
  protected wrapErrorHandler(promise : Promise<any>) : any {
    return promise.then(data => {
      return [null, data];
    })
    .catch(err => [err]);
  }
}

export interface BaseServiceConstructor<T extends BaseModel> {
  new (attributes : any) : T;
}

