import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AbsencesDashboardComponent } from './pages/absences-dashboard/absences-dashboard.component';
import { AbsencesRoutingModule } from './absences-routing.module';
import { StudentAbsenceDashboardComponent } from './pages/student-absence-dashboard/student-absence-dashboard.component';
import { ScheduleComponent } from './components/schedule/schedule.component'; // a plugin!
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { AdminAbsenceDashboardComponent } from './pages/admin-absence-dashboard/admin-absence-dashboard.component';
import { StudentAbsencesComponent } from './pages/student-absences/student-absences.component';
import { StudentAbsenceTableComponent } from './components/student-absence-table/student-absence-table.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AbsencesDashboardComponent,
    StudentAbsenceDashboardComponent,
    ScheduleComponent,
    AdminAbsenceDashboardComponent,
    StudentAbsencesComponent,
    StudentAbsenceTableComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    AbsencesRoutingModule,
    FullCalendarModule,
    DialogModule,
    FileUploadModule,
    HttpClientModule,
    InputTextareaModule,
    CalendarModule,
  ]
})
export class AbsencesModule { }
