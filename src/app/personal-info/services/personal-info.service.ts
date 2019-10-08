import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { BASE_USER_INFO } from '@personal-info/mocks/base-user-info';
import { BaseUserInfo } from '@personal-info/models/personal-info.model';
import { UserInfo } from '@shared/models/user-info.model';
import { LocalStorageService } from '@app/shared/services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const UPDATE_USER = '/users';

@Injectable()
export class PersonalInfoService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  public getBaseUserInfo(): Observable<UserInfo> {
   return of(this.localStorage.getUserInfoFromLocalStorage());
    // return of(BASE_USER_INFO);
  }

  public updateUserInfo(user: UserInfo): Observable<any> {
    return this.http.put(UPDATE_USER, user).pipe(
      tap( res => this.localStorage.saveUserInfoInLocalStorage(res))
    );
  }
}
