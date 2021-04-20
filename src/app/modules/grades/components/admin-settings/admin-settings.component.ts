import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Course, courses } from 'src/app/shared/data/courses';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss'],
})
export class AdminSettingsComponent implements OnInit {

  courses: Course[] = Object.assign([], courses);

  modules = [
    { label: 'Cloud et Architecture', value: 'cloud' },
    { label: 'Leadership et Management', value: 'management' },
    { label: 'Mobilité et Applications', value: 'applications' },
  ];

  teachers = [
    {name: 'Yannick Neff'},
    {name: 'Jean-Christophe Ferry'},
    {name: 'Thomas Cordival'},
    {name: 'Frédéric Fourdrinier'},
    {name: 'Christophe Andreu'},
    {name: 'Guillaume Barbier'},
    {name: 'Lucas Boisserie'},
    {name: 'Florent Fauchille'},
  ];

  data: (Course&{moduleText: string})[] = [];

  editedCourse: Course|null = null;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.data = this.courses.map(course => {
      const e = this.modules.find(m => course.module === m.value);
      if (!e) throw Error('Impossible');
      return {...course, moduleText: e.label};
    });
  }

  edit(course: Course): void {
    this.editedCourse = {...course};
  }

  stopEdition(): void {
    if (this.editedCourse === null) return;

    const index = this.courses.findIndex(course => course.id === this.editedCourse?.id);
    if (index >= 0) {
      this.courses[index] = {...this.editedCourse};
      this.reloadData();
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Course updated successfully'});
      this.editedCourse = null;
    }

  }

  deleteCourse(): void {
    if (this.editedCourse === null) return;

    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this course?',
      accept: () => {
        const index = this.courses.findIndex(course => course.id === this.editedCourse?.id);
        if (index >= 0) {
          this.courses.splice(index, 1);
          this.reloadData();
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Course deleted successfully'});
          this.editedCourse = null;

        }
      }
    });
  }
}
