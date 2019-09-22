import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Notification, NotificationType } from '@shared/models/notification';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationService {
  private subject = new Subject<Notification>();

  constructor() { }

  public getNotification(): Observable<any> {
    return this.subject.asObservable();
  }

  public success(message: string) {
    this.addNotification(new Notification({ message, type: NotificationType.Success }));
  }

  public error(message: string) {
    this.addNotification(new Notification({ message, type: NotificationType.Error }));
  }

  public info(message: string) {
    this.addNotification(new Notification({ message, type: NotificationType.Info }));
  }

  public warning(message: string) {
    this.addNotification(new Notification({ message, type: NotificationType.Warning }));
  }

  public addNotification(alert: Notification) {
    this.subject.next(alert);
  }
}
