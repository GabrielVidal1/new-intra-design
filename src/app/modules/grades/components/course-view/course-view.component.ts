import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Course, courses } from 'src/app/shared/data/courses';
import { students } from 'src/app/shared/data/students';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent implements OnInit, OnDestroy{

  course: Course|null = null;

  grades = students.map(student => ({
    ...student, grade: Math.floor(20 * Math.random())
  }));

  private routeSub?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.pipe(
    ).subscribe(params => {
      this.course = courses[params['course-id']];
    })
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
