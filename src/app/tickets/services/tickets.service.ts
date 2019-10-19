import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { ScheduleDay } from '@schedule/models/schedule-day.model';

export const GET_USER_EVENTS = '/events/';
export const UNBOOK_EVENT = '/events/unbook';

@Injectable()
export class TicketsService {

  constructor(private http: HttpClient) { }

  public getUserEvents(userId: string): Observable<ScheduleDay[]> {
    return this.http.get<ScheduleDay[]>(GET_USER_EVENTS + userId).pipe(
      map((data: ScheduleDay[]) => {
        return data.map((item: ScheduleDay) => {
          return { ...item, dateUI: this.getDateFromString(item.date) };
        })
        .sort((a: ScheduleDay, b: ScheduleDay) => a.dateUI.getTime() - b.dateUI.getTime());
      })
    );
  }

  public unbookEvent(userId: string, eventId: string): Observable<any> {
    const data = {
      userId: userId,
      eventId: eventId
    };
    return this.http.post(UNBOOK_EVENT, data);
  }

  public getDateFromString(date): Date {
    const splitedDate = date.split('.');
    const formatedDate = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);

    return formatedDate;
  }
}
