import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesDashboardComponent } from './pages/grades-dashboard/grades-dashboard.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { AdminGradeViewComponent } from './components/admin-grade-view/admin-grade-view.component';
import { StudentGradeViewComponent } from './components/student-grade-view/student-grade-view.component';
import { TeacherGradeViewComponent } from './components/teacher-grade-view/teacher-grade-view.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { GradesRoutingModule } from './grades-routing.module';
import { CourseViewComponent } from './components/course-view/course-view.component';

@NgModule({
  declarations: [
    GradesDashboardComponent,
    AdminSettingsComponent,
    AdminGradeViewComponent,
    StudentGradeViewComponent,
    TeacherGradeViewComponent,
    CourseViewComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    GradesRoutingModule,
  ]
})
export class GradesModule { }
