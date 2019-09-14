import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { BASE_USER_INFO } from '@personal-info/mocks/base-user-info';
import { BaseUserInfo } from '@personal-info/models/personal-info.model';

@Injectable()
export class PersonalInfoService {

  constructor() { }

  public getBaseUserInfo(): Observable<BaseUserInfo> {
    return of(BASE_USER_INFO);
  }
}
