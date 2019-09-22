import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../services/notification.service';


import { Notification, NotificationType } from '@shared/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() id: string;

  public notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getAlert().subscribe((alert: Notification) => {
      if (!alert) {
        this.notifications = [];
        return;
      }

      this.notifications.push(alert);

      const dismissWait = () => {
        new Promise<void>((resolve) => setTimeout(resolve, 3000)).then(() => {
          this.removeAlert(alert);
        });
      };
      dismissWait();
    });
  }

  public removeAlert(alert: Notification) {
    this.notifications = this.notifications.filter(x => x !== alert);
  }

  public cssClass(notification: Notification): string {
    switch (notification.type) {
      case NotificationType.Success:
        return 'success';
      case NotificationType.Error:
        return 'error';
      case NotificationType.Info:
        return 'info';
      case NotificationType.Warning:
        return 'warning';
    }
  }
}
