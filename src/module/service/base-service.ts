import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

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
}


