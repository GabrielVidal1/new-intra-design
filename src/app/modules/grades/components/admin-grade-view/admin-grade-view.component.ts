import { Component } from '@angular/core';
import { courses } from 'src/app/shared/data/courses';

@Component({
  selector: 'app-admin-grade-view',
  templateUrl: './admin-grade-view.component.html',
  styleUrls: ['./admin-grade-view.component.scss']
})
export class AdminGradeViewComponent {

  courses = courses;

  constructor() { }
}
