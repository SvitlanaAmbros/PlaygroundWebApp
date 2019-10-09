import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { TicketsComponent } from '@tickets/tickets/tickets.component';
import { TicketsService } from '@tickets/services/tickets.service';
import { TicketEventComponent } from '@tickets/ticket-event/ticket-event.component';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    TicketsComponent,
    TicketEventComponent
  ],
  providers: [
    TicketsService
  ],
  exports: [
    TicketsComponent,
    RouterModule
  ]
})
export class TicketsModule { }
