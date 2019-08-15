import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
