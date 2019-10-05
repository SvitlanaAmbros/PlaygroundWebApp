import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { schedule } from '@schedule/mock/schedule-days.mock';

export const GET_SCHEDULE_FOR_PERIOD = '/schedule';
export const BOOK_EVENT = '/book';

@Injectable()
export class ScheduleService {

  constructor(private http: HttpClient) { }

  public getScheduleForPeriod(day: number): Observable<ScheduleDay[]> {
    const params = new HttpParams()
      .set('day', day.toString());
    // return this.http.get<ScheduleDay[]>(GET_SCHEDULE_FOR_PERIOD, { params });
    return of(schedule).pipe(
      map((data: ScheduleDay[]) => {
        return data.map((item: ScheduleDay) => {
          return {...item, dateUI: this.getDateFromString(item.date)};
        });
      })
    );
  }

  public  getDateFromString(date): Date {
    const splitedDate = date.split('.');

    // const day = splitedDate[0];
    // const time = splitedDate[1];

    // const splitedDayInfo = day.split('/');
    // const splitedTime = time.split(':');

    const formatedDate = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);

    return formatedDate;
  }

  public bookEvent(userId: string, eventId: string, time: string): Observable<string> {
    const params = new HttpParams()
      .set('userId', userId)
      .set('eventId', eventId)
      .set('time', time);
    // return this.http.post(BOOK_EVENT, params).pipe(
    //   map(res => 'Event was successfully booked')
    // );
    return of('Event was successfully booked');
  }
}
