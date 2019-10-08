import {
    Component,
    OnInit,
    Input,
    ChangeDetectorRef,
    Output,
    EventEmitter
} from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { ScheduleService } from '@schedule/services/schedule.service';
import { ScheduleEvent } from '@schedule/models/schedule-event.model';
import { NotificationService } from '@shared/services/notification.service';
import { PopupControls, PopupService } from '@shared/services/popup.service';
import { LocalStorageService } from '@shared/services/local-storage.service';

export const LOGIN = 'login';
export const SUCCESSFULLY_BOOKED = 'Event was successfully booked';
export const BOOKING_ERROR = 'Some error occured';

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
    @Output() updateScheduleInfo = new EventEmitter();

    constructor(private scheduleService: ScheduleService,
        private notification: NotificationService,
        private localStorageService: LocalStorageService,
        private popupService: PopupService) { }

    ngOnInit() {
        this.initPopup();
    }

    public bookEvent(event: ScheduleEvent): void {
        this.popupControls.open();
        this.currentEvent = event;
    }

    public confirmEventBooking(): void {
        this.isActionPerformed = true;
        this.scheduleService.bookEvent(this.localStorageService.getFromLocalStorage(LOGIN),
            this.currentEvent.id)
            .pipe(
                finalize(() => {
                    this.popupControls.close();
                    this.isActionPerformed = false;
                })
            )
            .subscribe(
                res => {
                    this.updateScheduleInfo.emit();
                    this.notification.success(SUCCESSFULLY_BOOKED);
                },
                err => this.notification.error(BOOKING_ERROR));
    }

    public closePopup(): void {
        this.popupControls.close();
    }

    private initPopup(): void {
        this.popupControls = this.popupService.create();
    }
}
