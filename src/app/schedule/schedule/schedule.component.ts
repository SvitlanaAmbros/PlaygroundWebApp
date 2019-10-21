import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { ScheduleService } from '@schedule/services/schedule.service';
import { SPORT_TYPES } from '@schedule/schedule/sport-types.constant';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    public sportTypes;
    public currentSportType = 'All';
    public scheduleData: Observable<ScheduleDay[]>;
    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.loadScheduleInfo(this.currentSportType);
        this.sportTypes = SPORT_TYPES;
    }

    public loadScheduleInfo(type: string = this.currentSportType): void {
        this.scheduleData = this.scheduleService.getScheduleForPeriod(type);
    }

    public changeSportType(): void {
        this.loadScheduleInfo(this.currentSportType);
    }
}
