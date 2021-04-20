import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export type UserType = 'admin'|'teacher'|'student';

@Injectable({
  providedIn: 'root'
})
export class UserDatasourceService {

  user$ = new ReplaySubject<UserType>(0);

  constructor() {
  }
}
