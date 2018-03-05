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
  public date : number;

  public dateString: string;

  /**
   * End date of a multi day event, not required for single day events.
   */
  public endDate? : number;

  public endDateString? : string;


  public creator : string;

  public eventId? : number;

  /**
   * Start time of the event
   */
  public startTime : number;

  public startTimeString: string;

  /**
   * End time of the event
   */
  public endTime : number;

  public endTimeString: string;

  /**
   * Total number of people attending this event
   */
  public numberOfAttendees : number;

  /**
   * Maximum number of volunteers allowed for this event
   */
  public maxVolunteersAllowed : number;

  /**
    If the event is made to be private. This event will not show up in join-able events lists.
   */
  public isPrivateEvent?: boolean;

  constructor(attributes: any) {
    super(attributes);
  }
}
