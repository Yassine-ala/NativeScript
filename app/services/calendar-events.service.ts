import {Injectable} from "@angular/core";
import {CalendarEvent} from "nativescript-ui-calendar";
import {Color} from "tns-core-modules/color";

@Injectable()
export class CalendarEventsService {

    blueColor = new Color(255, 19,149,249);
    orangeColor = new Color(255, 255,153,51);

    getCalendarEvents(): Array<CalendarEvent> {
        let now = new Date();
        let startDate: Date,
            endDate: Date,
            event: CalendarEvent;
        let events: Array<CalendarEvent> = new Array<CalendarEvent>();
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            event = new CalendarEvent("", startDate, endDate, false, this.blueColor);
            events.push(event);
            if (i % 3 === 0) {
                event = new CalendarEvent("", startDate, endDate, false, this.orangeColor);
                events.push(event);
            }
        }
        return events;
    }
}