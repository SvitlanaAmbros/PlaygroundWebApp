import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ScheduleComponent } from '@schedule/schedule/schedule.component';
import { ScheduleItemComponent } from '@schedule/schedule-item/schedule-item.component';
import { ScheduleService } from '@schedule/services/schedule.service';

import { SharedModule } from '@shared/shared.module';

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
