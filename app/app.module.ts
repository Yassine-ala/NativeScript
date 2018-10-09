import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from "~/pages/home/home.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {Page1Component} from './pages/page1/page1.component';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {Page3Component} from './pages/page3/page3.component';
import {NativeScriptUISideDrawerModule} from "nativescript-ui-sidedrawer/angular";
import {NativeScriptUICalendarModule} from "nativescript-ui-calendar/angular";
import {CalendarStylesService} from "~/services/calendar-styles.service";
import {CalendarEventsService} from "~/services/calendar-events.service";
import { LocalDataComponent } from './local-data/local-data.component';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      Page1Component,
      CalendarComponent,
      Page3Component,
      LocalDataComponent,
  ],
  imports: [
      AppRoutingModule,
      NativeScriptModule,
      NativeScriptFormsModule,
      NativeScriptUISideDrawerModule,
      NativeScriptUICalendarModule
  ],
  providers: [ CalendarStylesService, CalendarEventsService ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

