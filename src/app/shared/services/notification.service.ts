import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Notification, NotificationType } from '@shared/models/notification';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationService {
  private subject = new Subject<Notification>();

  constructor() { }

  public getAlert(): Observable<any> {
    return this.subject.asObservable();
    // return this.subject.asObservable().filter((x: Alert) => x && x.alertId === alertId);
  }

  public success(message: string) {
    this.alert(new Notification({ message, type: NotificationType.Success }));
  }

  public error(message: string) {
    this.alert(new Notification({ message, type: NotificationType.Error }));
  }

  public info(message: string) {
    this.alert(new Notification({ message, type: NotificationType.Info }));
  }

  public warning(message: string) {
    this.alert(new Notification({ message, type: NotificationType.Warning }));
  }

  public alert(alert: Notification) {
    this.subject.next(alert);
  }

}
