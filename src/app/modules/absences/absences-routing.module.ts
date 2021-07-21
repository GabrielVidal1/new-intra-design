import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencesDashboardComponent } from './pages/absences-dashboard/absences-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: AbsencesDashboardComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AbsencesRoutingModule { }
