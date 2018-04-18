import { BaseModel } from './base-model';
import { SiteEvent } from './site-event'
import { Person } from './person'
import { Volunteer } from './volunteer'

export class BaseReport extends BaseModel {
    constructor(attributes: any) {
        super(attributes);
    }
}

export class SiteTotalsReport extends BaseReport {
    public items: Array<VolunteerStats>;
}

export class SiteTrafficReport extends BaseReport {
    public people: Array<Person>;
}

export class EventReport extends BaseReport {
    public siteEvent: SiteEvent;
    public people: Array<Person>;
}

export class VolunteerReport extends BaseReport {
    public volunteer: Volunteer;
    public totalHours: number;
}

export class VolunteerStats extends BaseModel {
    public volunteer: Volunteer;
    public totalHours: number;
    public numberOfEvents: number;

    constructor(attributes: any) {
        super(attributes);
    }
}
