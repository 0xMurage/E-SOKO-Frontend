import {Injectable} from '@angular/core';
import {NotificationModel} from '../../models/notification.model';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    public notify: Subject<NotificationModel> = new Subject<NotificationModel>();

    constructor() {
    }

    public warn(title, message?: string, timeOut?: number) {
        this.notify.next({type: 'warn', title, body: message, timeout: timeOut});
    }

    public success(title, message?: string, timeOut?: number) {
        this.notify.next({type: 'success', title, body: message, timeout: timeOut});
    }

    public error(title, message?: string, timeOut?: number) {
        this.notify.next({type: 'error', title, body: message, timeout: timeOut});
    }

    public info(title, message?: string, timeOut?: number) {
        this.notify.next({type: 'info', title, body: message, timeout: timeOut});
    }
}
