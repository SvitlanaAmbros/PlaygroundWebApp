import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { ScheduleService } from '@schedule/services/schedule.service';
import { ScheduleEvent } from '@schedule/models/schedule-event.model';
import { NotificationService } from '@shared/services/notification.service';
import { PopupControls, PopupService } from '@shared/services/popup.service';
import { PopupComponent } from '@shared/components/popup/popup.component';

@Component({
    selector: 'app-schedule-item',
    templateUrl: './schedule-item.component.html',
    styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
    public popupControls: PopupControls;
    public currentEvent: ScheduleEvent;

    public isActionPerformed = false;

    @Input() data: ScheduleDay;

    constructor(private scheduleService: ScheduleService,
        private notification: NotificationService,
        private popupService: PopupService,
        private cdref: ChangeDetectorRef) { }

    ngOnInit() {
        this.initPopup();
    }

    public bookEvent(event: ScheduleEvent): void {
        this.popupControls.open();
        this.currentEvent = event;
        console.log(event);
    }

    public confirmEventBooking(event: ScheduleEvent): void {
        console.log(event);
        this.scheduleService.bookEvent('1', event.id, event.startTime)
        .pipe(
            finalize(() => {
                // this.popupControls.close(); // TODO when data will be load from server, without delay
                // this.isActionPerformed = false;
            })
        )
        .subscribe(
            res => {
                this.isActionPerformed = true;
                const dismissWait = () => {
                    new Promise<void>((resolve) => setTimeout(resolve, 1000)).then(() => {
                        this.notification.info(res);
                        this.popupControls.close();
                        this.isActionPerformed = false;
                    });
                  };
                dismissWait();
            },
            err => this.notification.error(err));
    }

    public closePopup(): void {
        this.popupControls.close();
    }

    private initPopup(): void {
        this.popupControls = this.popupService.create();
    }
}
