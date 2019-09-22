import { Injectable, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable()
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  public saveInLocalStorage(key, value): void {
    this.storage.set(key, value);
  }

  public getFromLocalStorage(key): any {
    return this.storage.get(key);
  }
}
