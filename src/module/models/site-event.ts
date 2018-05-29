import {Injectable} from '@angular/core';
import moment from 'moment';
import {BaseModel} from "./base-model";

@Injectable()
export class SiteEvent extends BaseModel {

  /**
   * Is the event is a recurring event. If true, recurring event fields are required
   */
  public isRecurring? : boolean;

  /**
   * Type of recurrence. Valid values Daily, Weekly, Monthly, Yearly See api.gatekeep.io/docs/Events/RecurrenceTypes
   */
  public type? : string;

  /**
   * Days to repeat. Dependent on recurrence type.
   * Weekly: Days of the week, Sunday - Saturday, 0-6 Monthly: Which days of the month - 1-31.
   * Days later than the end of the month with be ignored.
   */
  public days? : number[];

  /**
   * Dependent on recurrence type, how many days, weeks, months, or years to skip in between occurrences
   */
  public separationCount? : number;

  /**
   * Occurrences of this event happen through this date
   */
  public recurrenceEndDate? : number;

  public title : string;

  public location? : string;

  /**
   * Date of the event, or for recurring events, the first date of the recurrence.
   */
  public startDate : string;

  /**
   * End date of the event. Will be same as start date if event only last a single day.
   */
  public endDate : string;


  public presentor : string;

  public eventId? : number;

  /**
   * Start time of the event
   */
  public startTime: string;

  /**
   * End time of the event
   */
  public endTime: string;

  /**
   * List of people attending this event
   */
  public people : number[];

  /**
   * Maximum number of volunteers allowed for this event
   */
  public maxVolunteersAllowed : number;

  /**
    If the event is made to be private. This event will not show up in join-able events lists.
   */
  public isPrivateEvent?: boolean;

  /**
   * The site this event belongs to
   */
  public siteId: number;

  /**
   * Description for the event
   */
  public description: string;

  constructor(attributes: any) {
    super(attributes);
  }
}
