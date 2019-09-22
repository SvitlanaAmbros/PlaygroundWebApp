import { Component, OnInit, Input } from '@angular/core';

import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { ScheduleService } from '@schedule/services/schedule.service';
import { ScheduleEvent } from '@schedule/models/schedule-event.model';
import { NotificationService } from '@app/shared/services/notification.service';

@Component({
    selector: 'app-schedule-item',
    templateUrl: './schedule-item.component.html',
    styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
    @Input() data: ScheduleDay;

    constructor(private scheduleService: ScheduleService, private notification: NotificationService) { }

    ngOnInit() {
    }

    public bookEvent(event: ScheduleEvent): void {
        this.scheduleService.bookEvent('1', event.id, event.startTime)
            .subscribe(res => this.notification.success(res),
                    err => this.notification.error(err));
    }
}
