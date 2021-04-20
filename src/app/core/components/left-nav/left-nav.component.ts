import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserDatasourceService, UserType } from 'src/app/shared/services/user-datasource.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  userTypes = [
    { value: 'admin', label: 'FFO' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'student', label: 'Student' },
  ];

  user$ = this.userDatasourceService.user$.pipe(map(user => {
    switch(user) {
      case 'admin':
        return {name: 'Frederic Fourdrinier', email: 'fredericfourdriner@epita.fr'};
      case 'teacher':
        return {name: 'Jean Bono', email: 'jeanbono@epita.fr'};
      case 'student':
        return {name: 'Thibault Nome', email: 'thibaultnome@epita.fr'};
    }
  }));

  constructor(private userDatasourceService: UserDatasourceService) { }

  ngOnInit(): void {
    this.userDatasourceService.user$.next('admin');
  }

  changeUser(value: UserType) {
    this.userDatasourceService.user$.next(value);
  }

}
