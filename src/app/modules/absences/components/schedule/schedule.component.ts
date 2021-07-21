import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions, EventClickArg } from '@fullcalendar/angular'; // useful for typechecking
import { courseData } from 'src/app/shared/data/calendarData';

export interface Seance {
  start: Date,
  end: Date,
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @Output() clickOnEvent = new EventEmitter<Seance>();

  // references the #calendar in the template
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    height: 650,
    nowIndicator: true,
    selectable: true,
    select: () => {},
  };

  constructor() { }

  get calendarApi() {
    return this.calendarComponent.getApi();
  }

  ngOnInit(): void {
    this.calendarOptions.events = courseData.items.map(item => ({
      title: item.summary,
      start: new Date(item.start.dateTime),
      end: new Date(item.end.dateTime),
    }))

    this.calendarOptions.eventClick = (event: EventClickArg) => {
      this.clickOnEvent.emit({
        start: event.event.start ?? new Date(),
        end: event.event.end ?? new Date()
      })
    };
  }
}
