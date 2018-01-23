import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SuccessAnimationComponent} from "./module/component";
import {CapitalizePipe} from "./module/pipes";
import {BaseService} from "./module/service";
import {EventsService} from "./module/service";
import {VisitorService} from "./module/service";
import {VolunteerService} from "./module/service";
import {OverviewService} from "./module/service";
import {AccountService} from "./module/service";
import {PersonService} from "./module/service"

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
