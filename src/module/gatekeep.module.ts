import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {Site} from "./models/Site";
import {SiteEvent} from "./models/SiteEvent";
import {VisitorInfo} from "./models/VisitorInfo";
import {VolunteerInfo} from "./models/VolunteerInfo";
import {EventsService} from "./service/events.service";


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Site,
    SiteEvent,
    VisitorInfo,
    VolunteerInfo
  ],
  declarations: [
    Site,
    SiteEvent,
    VisitorInfo,
    VolunteerInfo
  ]
})
export class GatekeepModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GatekeepModule,
      providers: [
        EventsService
      ]
    };
  }
}
