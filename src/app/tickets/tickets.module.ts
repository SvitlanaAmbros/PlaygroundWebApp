import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    TicketsComponent,
  ],
  exports: [
    TicketsComponent,
    RouterModule
  ]
})
export class TicketsModule { }
