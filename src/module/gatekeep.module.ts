import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {EventsService} from "./service/events.service";
import {SuccessAnimationComponent} from "./component/success-animation.component";
import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {LoginService} from "./service/login.service";
import {BaseService} from "./service/base-service";


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
  providers: [
    BaseService,
    EventsService,
    LoginService
  ]
})
export class GatekeepModule {

}
