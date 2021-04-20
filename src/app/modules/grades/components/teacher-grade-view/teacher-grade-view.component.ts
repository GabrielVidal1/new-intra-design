import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { students } from 'src/app/shared/data/students';

@Component({
  selector: 'app-teacher-grade-view',
  templateUrl: './teacher-grade-view.component.html',
  styleUrls: ['./teacher-grade-view.component.scss']
})
export class TeacherGradeViewComponent {

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  courses = [
    {name: 'ARCL'},
    {name: 'OPCO'},
    {name: 'PIT1'},
    {name: 'OPDI'},
    {name: 'MBTI'},
  ];

  grades = this.courses.map(course =>
    students.map(login => ({
      ...login,
      grade: course.name === 'OPCO' ? null : Math.floor(20 * Math.random())
    }))
  );

  cancelChanges() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Changes successfully canceled'});
  }

  saveDialog() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to save?\nA email will be send to FFO with all changes',
      accept: () => {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Grades successfully updated'});
      }
    });
  }

}
