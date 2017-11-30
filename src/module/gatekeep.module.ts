import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {EventsService} from "./service/events.service";
import {SuccessAnimationComponent} from "./component/success-animation.component";


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SuccessAnimationComponent
  ],
  declarations: [
    SuccessAnimationComponent
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
