import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from '@shared/services/local-storage.service';
import { UserInfoService } from '@shared/services/user-info.service';
import { NotificationService } from '@shared/services/notification.service';

import { ActionBtnComponent } from '@shared/components/action-btn/action-btn.component';
import { NotificationComponent } from '@shared/notification/notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActionBtnComponent,
    NotificationComponent
  ],
  providers: [
    LocalStorageService,
    UserInfoService,
    NotificationService
  ],
  exports: [
    ActionBtnComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
