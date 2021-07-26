import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Absence, AbsenceStatus } from '../admin-absence-dashboard/admin-absence-dashboard.component';

@Component({
  selector: 'app-student-absences',
  templateUrl: './student-absences.component.html',
  styleUrls: ['./student-absences.component.scss']
})
export class StudentAbsencesComponent implements OnInit {


  state: 'loading'|'ready' = 'loading';

  documents = false;
  
  absences: Absence[] = [
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
      status: 'new'
    },
  ];

  absencesStatus: {status: AbsenceStatus, name: string}[] = [
    { status: 'new', name: 'Nouvelle' },
    { status: 'pending', name: 'Vue' },
    { status: 'accepted', name: 'Acceptée' },
    { status: 'refused', name: 'Refusée' },
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
