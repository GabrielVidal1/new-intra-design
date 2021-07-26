import { Component, OnInit } from '@angular/core';
import { UserDatasourceService } from 'src/app/shared/services/user-datasource.service';

@Component({
  selector: 'app-absences-dashboard',
  templateUrl: './absences-dashboard.component.html',
  styleUrls: ['./absences-dashboard.component.scss']
})
export class AbsencesDashboardComponent {

  user$ = this.userDatasourceService.user$;

  constructor(private userDatasourceService: UserDatasourceService) { }

}
