import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { NotificationService } from '@shared/services/notification.service';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { ScheduleDay } from '@schedule/models/schedule-day.model';
import { TicketsService } from '@tickets/services/tickets.service';
import { PopupControls, PopupService } from '@app/shared/services/popup.service';
import { ScheduleEvent } from '@app/schedule/models/schedule-event.model';

export const LOGIN = 'login';
export const SUCCESSFULLY_UNBOOKED = 'Event was successfully unbooked';
export const UNBOOKING_ERROR = 'Some error occured';

@Component({
    selector: 'app-ticket-event',
    templateUrl: './ticket-event.component.html',
    styleUrls: ['./ticket-event.component.scss']
})
export class TicketEventComponent implements OnInit {
    @Input() data: ScheduleDay;
    @Output() updateTickets = new EventEmitter();

    public popupControls: PopupControls;

    public isActionPerformed = false;

    constructor(private ticketsService: TicketsService,
        private localStorageService: LocalStorageService,
        private notification: NotificationService,
        private popupService: PopupService) { }

    public ngOnInit(): void {
        this.initPopup();
    }

    private initPopup(): void {
        this.popupControls = this.popupService.create();
    }

    public unbookEvent(event: ScheduleEvent): void {
        this.popupControls.open();
    }

    public confirm(event: ScheduleEvent): void {
        console.log('!!!!', event);
        this.isActionPerformed = true;
        this.ticketsService.unbookEvent(this.localStorageService.getFromLocalStorage(LOGIN),
            event.id)
            .pipe(
                finalize(() => {
                    // this.popupControls.close();
                    this.isActionPerformed = false;
                })
            )
            .subscribe(
                res => {
                    this.updateTickets.emit();
                    // this.updateScheduleInfo.emit();
                    this.notification.success(SUCCESSFULLY_UNBOOKED);
                },
                err => this.notification.error(UNBOOKING_ERROR));
    }

    public closePopup(): void {
        this.popupControls.close();
    }
}
