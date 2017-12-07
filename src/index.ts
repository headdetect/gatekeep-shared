import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SuccessAnimationComponent} from "./module/component/success-animation.component";
import {CapitalizePipe} from "./module/pipes/capitalize.pipe";
import {BaseService} from "./module/service/base-service";
import {EventsService} from "./module/service/events.service";
import {LoginService} from "./module/service/login.service";

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
    CapitalizePipe
  ],
  declarations: [
    SuccessAnimationComponent,
    CapitalizePipe
  ],
})
export class GatekeepModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GatekeepModule,
      providers: [
        BaseService,
        EventsService,
        LoginService
      ]
    };
  }
}
