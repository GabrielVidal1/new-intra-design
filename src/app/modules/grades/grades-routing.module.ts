import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { GradesDashboardComponent } from './pages/grades-dashboard/grades-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: GradesDashboardComponent,
  },
  {
    path: ":course-id",
    component: CourseViewComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GradesRoutingModule { }
