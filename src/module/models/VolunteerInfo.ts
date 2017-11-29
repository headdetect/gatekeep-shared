import {Injectable} from "@angular/core";
import {DateTime} from "ionic-angular";

@Injectable()
export class VolunteerInfo {

  public fullName : string;

  public birthDate : DateTime;
}
