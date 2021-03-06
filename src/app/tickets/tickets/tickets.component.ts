import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from '@shared/services/local-storage.service';
import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { TicketsService } from '@tickets/services/tickets.service';
import { map } from 'rxjs/operators/map';

export const LOGIN = 'login';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  public tickets: Observable<ScheduleDay[]>;

  constructor(private ticketsService: TicketsService,
      private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.updateTicketsInfo();
  }

  public updateTicketsInfo(): void {
    this.tickets = this.ticketsService.getUserEvents(
      this.localStorageService.getFromLocalStorage(LOGIN)).pipe(
        map((res: ScheduleDay[]) => res.map((day: ScheduleDay) => { return {...day, isOpen: false}}))
      );
  }

  // public isRowOdd(ind: number): boolean {
  //   return ind % 2 !== 0;
  // }

  public toggleTickets(day: ScheduleDay): void {
    day.isOpen = !day.isOpen;
  }
}
