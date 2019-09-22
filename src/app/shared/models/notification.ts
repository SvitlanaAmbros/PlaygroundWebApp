export class Notification {
    type: NotificationType;
    message: string;
    alertId: string;

    constructor(init?: Partial<Notification>) {
        Object.assign(this, init);
    }
}

export enum NotificationType {
    Success,
    Error,
    Info,
    Warning
}
