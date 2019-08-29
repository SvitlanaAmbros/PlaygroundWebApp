import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleItemComponent
  ],
  exports: [
    ScheduleComponent,
  ]
})
export class ScheduleModule { }
