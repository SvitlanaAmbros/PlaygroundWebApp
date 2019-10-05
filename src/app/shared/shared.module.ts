import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from '@shared/services/local-storage.service';
import { UserInfoService } from '@shared/services/user-info.service';
import { NotificationService } from '@shared/services/notification.service';

import { ActionBtnComponent } from '@shared/components/action-btn/action-btn.component';
import { NotificationComponent } from '@shared/components/notification/notification.component';
import { PopupComponent } from '@shared/components/popup/popup.component';
import { PopupService } from '@shared/services/popup.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActionBtnComponent,
    NotificationComponent,
    PopupComponent
  ],
  providers: [
    LocalStorageService,
    UserInfoService,
    NotificationService,
    PopupService
  ],
  exports: [
    ActionBtnComponent,
    NotificationComponent,
    PopupComponent
  ]
})
export class SharedModule { }
