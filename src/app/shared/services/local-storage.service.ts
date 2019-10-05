import { Injectable, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { UserInfo } from '../models/user-info.model';

@Injectable()
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  public saveInLocalStorage(key, value): void {
    this.storage.set(key, value);
  }

  public getFromLocalStorage(key): any {
    return this.storage.get(key);
  }

  public getUserInfoFromLocalStorage(): UserInfo {
    const user: UserInfo = {
      name: undefined,
      surname: undefined,
      login: undefined,
      password: undefined,
      studentTicket: undefined
    };

    Object.keys(user).forEach(key => user[key] = this.getFromLocalStorage(key));
    return user;
  }

  public saveUserInfoInLocalStorage(user: UserInfo): void {
    Object.keys(user).forEach(key => this.saveInLocalStorage(key, user[key]));
  }
}
