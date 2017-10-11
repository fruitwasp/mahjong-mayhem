import { Component } from '@angular/core'

import { GameService, LoadingService, NotificationManager } from 'app/services'
import { Game } from 'app/models'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(
        public loadingService: LoadingService,
        public notificationManager: NotificationManager
    ) {}

    yesIsLoading() {
        return this.loadingService.yesIsLoading()
    }

    hasNotifications() {
        return this.notificationManager.hasNotifications()
    }

    getNotifications() {
        return this.notificationManager.getNotifications()
    }
}
