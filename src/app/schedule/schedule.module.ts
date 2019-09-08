import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ScheduleComponent,
    ScheduleItemComponent
  ],
  exports: [
    ScheduleComponent,
    RouterModule
  ]
})
export class ScheduleModule { }
