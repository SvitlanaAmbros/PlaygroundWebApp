import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { schedule } from '@schedule/mock/schedule-days.mock';
import { ScheduleEvent } from '../models/schedule-event.model';

export const GET_SCHEDULE_FOR_PERIOD = '/events';
export const BOOK_EVENT = '/events/book';

@Injectable()
export class ScheduleService {

  constructor(private http: HttpClient) { }

  public getScheduleForPeriod(sportType: string): Observable<ScheduleDay[]> {
    if (sportType !== 'All') {
      return this.http.get<ScheduleDay[]>(GET_SCHEDULE_FOR_PERIOD).pipe(
        map((data: ScheduleDay[]) => {
          return data.map((item: ScheduleDay) => {
            return { ...item, dateUI: this.getDateFromString(item.date) };
          })
            .sort((a: ScheduleDay, b: ScheduleDay) => a.dateUI.getTime() - b.dateUI.getTime())
            .map((day: ScheduleDay) => {
              return {
                ...day,
                events: day.events
                  .filter((event: ScheduleEvent) => event.sportType === sportType)
              };
            })
            .filter((day: ScheduleDay) => day.events.length > 0);
        })
      );
    }
    return this.http.get<ScheduleDay[]>(GET_SCHEDULE_FOR_PERIOD).pipe(
      map((data: ScheduleDay[]) => {
        return data.map((item: ScheduleDay) => {
          return { ...item, dateUI: this.getDateFromString(item.date) };
        })
        .sort((a: ScheduleDay, b: ScheduleDay) => a.dateUI.getTime() - b.dateUI.getTime());
      })
    );
  }

  public getDateFromString(date): Date {
    const splitedDate = date.split('.');
    const formatedDate = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);

    return formatedDate;
  }

  public bookEvent(userId: string, eventId: string): Observable<any> {
    const data = {
      userId: userId,
      eventId: eventId
    };

    return this.http.post(BOOK_EVENT, data);
  }
}
