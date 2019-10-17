import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { ScheduleService } from '@schedule/services/schedule.service';
import { SPORT_TYPES } from './sport-types.constant';
import { WeekDay } from '@angular/common';
import { map } from 'rxjs/operators/map';
import { ScheduleEvent } from '../models/schedule-event.model';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    public sportTypes = SPORT_TYPES;
    public currentSportType = 'All';
    public scheduleData: ScheduleDay[];
    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.loadScheduleInfo();
        // this.scheduleData = this.scheduleService.getScheduleForPeriod(2);
    }

    public loadScheduleInfo(): void {
        this.scheduleService.getScheduleForPeriod().subscribe(res => {
            this.scheduleData = res;
        });
    }

    public changeSportType(): void {
        if (this.currentSportType === 'All') {
            this.scheduleService.getScheduleForPeriod().subscribe(res => {
                this.scheduleData = res;
            });
        } else {
            this.scheduleService.getScheduleForPeriod().subscribe(res => {
                this.scheduleData = res;
                this.scheduleData = this.scheduleData
                    .map((day: ScheduleDay) => {
                        return {
                            ...day,
                            events: day.events
                                .filter((event: ScheduleEvent) => event.sportType === this.currentSportType)
                        };
                    })
                    .filter((day: ScheduleDay) => day.events.length > 0 );
            });
        }
    }
}
