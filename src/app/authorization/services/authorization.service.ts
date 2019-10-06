import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { UserInfo } from '@shared/models/user-info.model';
import { LoginUserInfo } from '@shared/models/login-user-info.model';
import { UserInfoService } from '@app/shared/services/user-info.service';

export const LOGIN = '/users/login';
export const REGISTER = '/users/registration';

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  public login(userUI: LoginUserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(LOGIN, userUI);
    // const user: UserInfo = {
    //   name: 'user1',
    //   surname: 'surname',
    //   login: 'user123@gmail.com',
    //   password: '1234',
    // };
    // return of(user);
  }

  public register(userUI: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(REGISTER, userUI);
  }
}
