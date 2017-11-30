import {Injectable} from "@angular/core";
import {Moment} from "moment";

@Injectable()
export class VolunteerInfo {

  public fullName : string;

  public birthDate : Moment;
}
