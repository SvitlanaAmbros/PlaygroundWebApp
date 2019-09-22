import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ScheduleComponent } from '@schedule/schedule/schedule.component';
import { ScheduleItemComponent } from '@schedule/schedule-item/schedule-item.component';
import { SharedModule } from '@shared/shared.module';
import { ScheduleService } from './services/schedule.service';

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
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    ScheduleService
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
