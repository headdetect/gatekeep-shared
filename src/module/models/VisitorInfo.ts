import {Injectable} from "@angular/core";
import {DateTime} from "ionic-angular";

@Injectable()
export class VisitorInfo {

  public fullName : string;

  public birthDate : DateTime;

  public socialSecurityNumber : string;

  public emailAddress : string;

  public phoneNumber : string;

  public faceImage : string;
}
