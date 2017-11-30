import {Injectable} from '@angular/core';

@Injectable()
export class Site {

  /**
   * The site location name.
   * For example: "GateKeep Elementary"
   */
  public name : string;

  /**
   * A url/path to the branding image
   */
  public image : string;
}
