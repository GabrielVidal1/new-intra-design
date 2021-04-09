import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

interface Course {
  id: number,
  module: string,
  name: string,
  teachers: {name: string}[],
  coef: number,
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { id: 1, module: 'cloud', name: 'ARCL', teachers:[{name:'Yannick Neff'}], coef: 3},
    { id: 2, module: 'cloud', name: 'UBSI', teachers:[{name:'Jean-Christophe Ferry'},{name:'Thomas Cordival'}], coef: 1},
    { id: 3, module: 'cloud', name: 'SOAR', teachers:[{name:'Frédéric Fourdrinier'},{name:'Yannick Neff'}], coef: 1},
    { id: 4, module: 'management', name: 'OPCO', teachers:[{name:'Christophe Andreu'}], coef: 2},
    { id: 5, module: 'management', name: 'AMOA', teachers:[{name:'Guillaume Barbier'}], coef: 1},
    { id: 6, module: 'applications', name: 'ARLA', teachers:[{name:'Lucas Boisserie'},{name:'Florent Fauchille'}], coef: 2},
  ];

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
