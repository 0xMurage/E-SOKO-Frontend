import {TemplateRef} from '@angular/core';

export class NotificationModel {
    type: 'success' | 'error' | 'info' | 'warn';
    body?: string;
    title?: string;
    position?: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right' | 'center';
    timeout?: number;
    pauseOnHover?: boolean;
    closeOnClick?: boolean;
    template?: TemplateRef<any>;
    width?: string;
}
