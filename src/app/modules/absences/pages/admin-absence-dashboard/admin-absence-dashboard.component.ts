import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export type AbsenceStatus = 'pending'|'accepted'|'refused'|'new';

export interface Absence {
  id: number,
  student: {
    login: string,
    name: string,
  },
  status: AbsenceStatus,
  startDate: Date,
  endDate: Date,
  justification: string,
  documents: boolean,
};

@Component({
  selector: 'app-admin-absence-dashboard',
  templateUrl: './admin-absence-dashboard.component.html',
  styleUrls: ['./admin-absence-dashboard.component.scss']
})
export class AdminAbsenceDashboardComponent implements OnInit {

  state: 'loading'|'ready' = 'loading';

  documents = false;
  
  absences: Absence[] = [
    {
      id: 0,
      student: {
        login: 'marie.jane',
        name: 'Marie Jane',
      },
      startDate: new Date(2021, 7, 26, 16, 0),
      endDate: new Date(2021, 7, 26, 18, 0),
      justification: 'Arrêt maladie',
      documents: true,
      status: 'pending'
    },
    {
      id: 1,
      student: {
        login: 'jean.bono',
        name: 'Jean Bono',
      },
      startDate: new Date(2021, 7, 26, 16, 0),
      endDate: new Date(2021, 7, 26, 18, 0),
      justification: '',
      documents: false,
      status: 'refused'
    },
    {
      id: 2,
      student: {
        login: 'ali.baba',
        name: 'Ali Baba',
      },
      startDate: new Date(2021, 7, 26, 16, 0),
      endDate: new Date(2021, 7, 26, 18, 0),
      justification: 'Enterrement de Papi',
      documents: true,
      status: 'accepted'
    },
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
  ]

  newAbsences: Absence[] = [];

  viewedAbences: Absence[] = [];


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.state = 'loading';
    of(this.absences).pipe(
      delay(500)
    ).subscribe(absences => {
      this.newAbsences = absences.filter(absence => absence.status === 'new');
      this.viewedAbences = absences.filter(absence => absence.status !== 'new')
      this.state = 'ready';
    })
  }

  processAbsence(id: number, status: AbsenceStatus): void {
    this.absences[id].status = status;
    this.reloadData();
  }

}
