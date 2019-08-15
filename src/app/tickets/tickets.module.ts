import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TicketsComponent,
  ],
  exports: [
    TicketsComponent
  ]
})
export class TicketsModule { }
