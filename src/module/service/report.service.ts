import {BaseService} from "./base-service";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import moment from "moment";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Injectable()
export class ReportService extends BaseService {

    constructor(public http : Http) {
        super();
    }

    public event(eventId: number): Promise<[any, any]> {
        return this.wrapErrorHandler(
            this.http.get(BaseService.Url + '/Reports/Events?eventId=' + eventId)
            .toPromise()
        )
    }

    public siteTotal(siteId: number, startDate: moment.Moment, endDate: moment.Moment): Promise<[any, any]> {
        return this.wrapErrorHandler(
            this.http.get(
                `${BaseService.Url}/Reports/VolunteerTotals` +
                `?siteId=${siteId}&filterStartDate=${startDate.format('L')}&filterEndDate=${endDate.format('L')}`
            ).toPromise()
        )
    }

    public siteTraffic(startDate: moment.Moment, endDate: moment.Moment): Promise<[any, any]> {
        return this.wrapErrorHandler(
            this.http.get(
                `${BaseService.Url}/Reports/Site/Traffic` +
                `?filterStartDate=${startDate.format('L')}&filterEndDate=${endDate.format('L')}`
            ).toPromise()
        )
    }

    public volunteer(volunteerId: number, siteId: number, startDate: moment.Moment, endDate: moment.Moment): Promise<[any, any]> {
        const start = startDate.format('L'),
              end = endDate.format('L')
        return this.wrapErrorHandler(
            this.http.get(
                `${BaseService.Url}/Reports/IndividualVolunteerTotals?` + 
                `volunteerId=${volunteerId}&siteId=${siteId}&filterStartDate=${start}&filterEndDate=${end}`
            ).toPromise()
        )   
    }
}
