import { Component } from '@angular/core';

@Component({
  selector: 'app-student-grade-view',
  templateUrl: './student-grade-view.component.html',
  styleUrls: ['./student-grade-view.component.scss']
})
export class StudentGradeViewComponent {

  constructor() { }

  grades = [
    {coursId: 1, courseName: 'ARCL', grade: 12, average: 10},
    {coursId: 2, courseName: 'OPDI', grade: 0, average: 2},
    {coursId: 3, courseName: 'PIT1', grade: 16, average: 13},
    {coursId: 4, courseName: 'MBTI', grade: 18, average: 9},
    {coursId: 4, courseName: 'OPCO', grade: null, average: null},
  ];
}
