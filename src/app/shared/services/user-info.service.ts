import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { LoginUserInfo } from '@shared/models/login-user-info.model';

@Injectable()
export class UserInfoService {
  private subject = new Subject<LoginUserInfo>();

  constructor() { }

  public updateUserInfo(user: LoginUserInfo): void {
    this.subject.next(user);
  }

  public getUserInfo(): Observable<LoginUserInfo> {
    return this.subject.asObservable();
  }

}
