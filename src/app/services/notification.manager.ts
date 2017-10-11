import { Injectable } from '@angular/core'

@Injectable()
export class NotificationManager {

    private notifications: Array<any>

    hasNotifications() {
        return this.notifications.length > 0
    }

    getNotifications() {
        return this.notifications
    }

    push(notificationData: any) {
        this.notifications.push(notificationData)
    }

    pop(index: number = this.notifications.length - 1) {
        this.notifications.splice(index, 1)
    }

    processHttpResponse(response) {
        if (response.statusCode === 401) {
            this.push({
                message: response.message,
                id: this.notifications.length
            })
        }
    }
}
