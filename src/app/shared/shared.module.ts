import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionBtnComponent } from '@shared/components/action-btn/action-btn.component';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { UserInfoService } from '@shared/services/user-info.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActionBtnComponent
  ],
  providers: [
    LocalStorageService,
    UserInfoService
  ],
  exports: [
    ActionBtnComponent
  ]
})
export class SharedModule { }
