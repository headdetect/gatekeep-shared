import {Injectable} from "@angular/core";
import {Moment} from "moment";

@Injectable()
export class VisitorInfo {

  public fullName : string;

  public birthDate : Moment;

  public socialSecurityNumber : string;

  public emailAddress : string;

  public phoneNumber : string;

  public faceImage : string;
}
