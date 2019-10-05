import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { LoginUserInfo } from '@shared/models/login-user-info.model';
import { UserInfo } from '../models/user-info.model';

@Injectable()
export class UserInfoService {
  private subject = new Subject<UserInfo>();

  constructor() { }

  public updateUserInfo(user: UserInfo): void {
    this.subject.next(user);
  }

  public getUserInfo(): Observable<UserInfo> {
    return this.subject.asObservable();
  }
}
