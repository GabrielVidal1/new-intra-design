import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Absence, AbsenceStatus } from '../../pages/admin-absence-dashboard/admin-absence-dashboard.component';

@Component({
  selector: 'app-student-absence-table',
  templateUrl: './student-absence-table.component.html',
  styleUrls: ['./student-absence-table.component.scss']
})
export class StudentAbsenceTableComponent implements OnInit {

  state: 'loading'|'ready' = 'loading';

  documents = false;
  
  absences = [
    {
      id: 0,
      student: {
        login: 'jean.bono',
        name: 'Jean Bono',
      },
      startDate: new Date(2021, 7, 26, 16, 0),
      endDate: new Date(2021, 7, 26, 18, 0),
      justification: 'Malade du covid',
      documents: true,
      status: 'Nouvelle'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.state = 'loading';
    of(this.absences).pipe(
      delay(500)
    ).subscribe(_absences => {
      this.state = 'ready';
    })
  }

}
