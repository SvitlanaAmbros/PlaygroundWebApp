import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBtnComponent } from './components/action-btn/action-btn.component';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActionBtnComponent
  ],
  providers: [
    LocalStorageService
  ],
  exports: [
    ActionBtnComponent
  ]
})
export class SharedModule { }
