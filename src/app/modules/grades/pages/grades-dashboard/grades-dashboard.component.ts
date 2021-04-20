import { Component, ViewEncapsulation } from '@angular/core';
import { UserDatasourceService } from 'src/app/shared/services/user-datasource.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-grades-dashboard',
  templateUrl: './grades-dashboard.component.html',
  styleUrls: [ './grades-dashboard.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class GradesDashboardComponent {

  editing = false;

  user$ = this.userDatasourceService.user$.pipe(
    tap(_ => this.editing = false)
  );

  constructor(private userDatasourceService: UserDatasourceService) { }
}
