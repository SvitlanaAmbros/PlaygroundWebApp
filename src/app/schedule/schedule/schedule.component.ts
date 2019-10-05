import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { ScheduleService } from '@schedule/services/schedule.service';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    public scheduleData: Observable<ScheduleDay[]>;
    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.scheduleData = this.scheduleService.getScheduleForPeriod(2);
    }
}
