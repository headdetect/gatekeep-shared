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
            this.http.get(BaseService.Url + '/Reports/Event/' + eventId)
            .toPromise()
        )
    }

    public siteTotal(startDate: moment.Moment, endDate: moment.Moment): Promise<[any, any]> {
        return this.wrapErrorHandler(
            this.http.get(
                `${BaseService.Url}/Reports/Site/Total?filterStartDate=${startDate.format('L')}&filterEndDate=${endDate.format('L')}`
            ).toPromise()
        )
    }

    public siteTraffic(startDate: moment.Moment, endDate: moment.Moment): Promise<[any, any]> {
        return this.wrapErrorHandler(
            this.http.get(
                `${BaseService.Url}/Reports/Site/Traffic?filterStartDate=${startDate.format('L')}&filterEndDate=${endDate.format('L')}`
            ).toPromise()
        )
    }

    public volunteer(volunteerId: number, startDate: moment.Moment, endDate: moment.Moment): Promise<[any, any]> {
        const start = startDate.format('L'),
              end = endDate.format('L')
        return this.wrapErrorHandler(
            this.http.get(
                `${BaseService.Url}/Reports/Volunteer/${volunteerId}?filterStartDate=${start}&filterEndDate=${end}`
            ).toPromise()
        )   
    }
}
