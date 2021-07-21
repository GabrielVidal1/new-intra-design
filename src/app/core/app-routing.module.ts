import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "grades",
    loadChildren: (): Promise<any> => import('../modules/grades/grades.module').then(m => m.GradesModule)
  },
  {
    path: "absences",
    loadChildren: (): Promise<any> => import('../modules/absences/absences.module').then(m => m.AbsencesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
