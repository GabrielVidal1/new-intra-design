import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ScheduleComponent, Seance } from '../../components/schedule/schedule.component';

@Component({
  selector: 'app-student-absence-dashboard',
  templateUrl: './student-absence-dashboard.component.html',
  styleUrls: ['./student-absence-dashboard.component.scss']
})
export class StudentAbsenceDashboardComponent implements OnInit {

  @ViewChild('schedule') scheduleComponent!: ScheduleComponent;

  dialog = false;

  rangeDates: Date[] = [new Date(), new Date()];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  absence(seance: Seance): void {
    if (seance.name === 'Absence') return;
    this.dialog = true;

    this.rangeDates = [seance.start, seance.end];
  }

  createAbsence(): void {

    this.scheduleComponent.calendarApi.addEvent({
      title: 'Absence',
      start: this.rangeDates[0],
      end: this.rangeDates[1],
      color: 'red',
    })
    this.dialog = false;
  }

}
