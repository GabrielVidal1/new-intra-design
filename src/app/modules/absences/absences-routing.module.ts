import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencesDashboardComponent } from './pages/absences-dashboard/absences-dashboard.component';
import { StudentAbsencesComponent } from './pages/student-absences/student-absences.component';

const routes: Routes = [
  {
    path: "",
    component: AbsencesDashboardComponent,
  },
  {
    path: ":student",
    component: StudentAbsencesComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AbsencesRoutingModule { }
