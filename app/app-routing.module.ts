import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import {HomeComponent} from "~/pages/home/home.component";
import {Page1Component} from "~/pages/page1/page1.component";
import {CalendarComponent} from "~/pages/calendar/calendar.component";
import {Page3Component} from "~/pages/page3/page3.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'calendar', component: CalendarComponent },
  { path: 'page3', component: Page3Component },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
