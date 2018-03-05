import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SuccessAnimationComponent} from "./module/component/success-animation.component";
import {CapitalizePipe} from "./module/pipes/capitalize.pipe";
import {BaseService} from "./module/service/base-service";
import {EventsService} from "./module/service/events.service";
import {AccountService} from "./module/service/account.service";
import {VisitorService} from "./module/service/visitor.service";
import {VolunteerService} from "./module/service/volunteer.service";
import {OverviewService} from "./module/service/overview.service";
import {PersonService} from "./module/service/person.service";

export * from './module/models/';
export * from './module/service/';
export * from './module/component/';
export * from './module/pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SuccessAnimationComponent,
    CapitalizePipe,
  ],
  declarations: [
    SuccessAnimationComponent,
    CapitalizePipe,
  ],
  providers: [
    BaseService,
    EventsService,
    AccountService,
    VisitorService,
    VolunteerService,
    PersonService,
    OverviewService
  ]
})
export class GatekeepModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GatekeepModule,
      providers: [
        BaseService,
        EventsService,
        AccountService,
        VisitorService,
        VolunteerService,
        PersonService,
        OverviewService
      ]
    };
  }
}
