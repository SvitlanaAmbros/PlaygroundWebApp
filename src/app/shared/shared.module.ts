import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBtnComponent } from './components/action-btn/action-btn.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActionBtnComponent
  ],
  exports: [
    ActionBtnComponent
  ]
})
export class SharedModule { }
