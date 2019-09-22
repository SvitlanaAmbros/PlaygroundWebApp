import { ScheduleEvent } from '@schedule/models/schedule-event.model';

export interface ScheduleDay {
    date: string;
    dateUI?: Date;
    events: ScheduleEvent[];
}

