import { Component, OnInit, Input } from '@angular/core';

import { NotificationService } from '@shared/services/notification.service';
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
    this.notificationService.getNotification().subscribe((notification: Notification) => {
      if (!alert) {
        this.notifications = [];
        return;
      }

      this.notifications.push(notification);

      const dismissWait = () => {
        new Promise<void>((resolve) => setTimeout(resolve, 3000)).then(() => {
          // this.removeNotification(notification);
        });
      };
      dismissWait();
    });
  }

  public removeNotification(notification: Notification) {
    this.notifications = this.notifications.filter(item => item !== notification);
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
