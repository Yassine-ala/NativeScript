import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarStylesService} from "~/services/calendar-styles.service";
import {CalendarEvent, CalendarSelectionEventData, RadCalendar} from 'nativescript-ui-calendar';
import {CalendarEventsService} from "~/services/calendar-events.service";
import {RadCalendarComponent} from "nativescript-ui-calendar/angular";
import { isAndroid } from "tns-core-modules/platform";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: 'app-page2',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    moduleId: module.id,
})
export class CalendarComponent implements OnInit {

    @ViewChild("myCalendar") calendar: RadCalendarComponent;
    monthViewStyle;

    yearMonths = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet",
        "Aôut", "Septembre", "Octobre", "Novembre", "Decembre"];
    engYearMonths = ["January", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet",
        "Aôut", "Septembre", "Octobre", "Novembre", "Decembre"];

    events: Array<CalendarEvent>;
    selectedDayEvents: Array<CalendarEvent>;



    monthIndex = new Date().getMonth();
    yearIndex = new Date().getFullYear();
    minDate: Date;
    maxDate: Date;

    /*minDate = new Date(this.engYearMonths[this.fixedMonth]+'August 1, 2018');
    maxDate = new Date(this.engYearMonths[this.fixedMonth]+'January 1, 2019');*/

    constructor(private calendarStyle: CalendarStylesService, private  calendarEvents: CalendarEventsService) { }

    setDateIntervals(){
        let fixedMonth = new Date().getMonth();
        let fixedYear = new Date().getFullYear();
        if (fixedMonth < 10 && fixedMonth > 1)
            {
                this.minDate = new Date(fixedYear+'-'+(fixedMonth-1)+'-01');
                this.maxDate = new Date(fixedYear+'-'+(fixedMonth+3)+'-01');
            } else if (fixedMonth > 10) {
                    // Year Change
            } else if (fixedMonth < 2) {
                    // Year Change
            }
    }

    ngOnInit() {
        this.setDateIntervals();
        this.monthViewStyle = this.calendarStyle.getMonthViewStyle();
        this.events = this.calendarEvents.getCalendarEvents();
    }

    nextMonth() {
        this.calendar.nativeElement.navigateForward();
        this.monthIndex++;
        if (this.monthIndex > 11) {
            this.yearIndex++;
            this.monthIndex = 0;
        }
    }

    prevMonth() {
        this.calendar.nativeElement.navigateBack();
        this.monthIndex--;
        if (this.monthIndex < 0) {
            this.yearIndex--;
            this.monthIndex = 11;
        }
    }

    onDateSelected(args: CalendarSelectionEventData) {
        const calendar: RadCalendar = args.object;
        const date: Date = args.date;
        this.selectedDayEvents = calendar.getEventsForDate(date);
        this.selectedDayEvents.forEach(event => {
            console.log(event.title);
            console.log(event.startDate);
            console.log(event.endDate);
        });
    }

    onCalendarLoaded(args) {
        let calendar = <RadCalendar>args.object;

        let telCalendar = calendar.nativeView;
        let gestureManager = telCalendar.getGestureManager();

        gestureManager.setDoubleTapToChangeDisplayMode(false);
        gestureManager.setPinchOpenToChangeDisplayMode(false);
        gestureManager.setPinchCloseToChangeDisplayMode(false);
    }
}
