import { Component } from '@angular/core'

import { GameService, LoadingService } from 'app/services'
import { Game } from 'app/models'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(public loadingService: LoadingService) {}

    yesIsLoading() {
        return this.loadingService.yesIsLoading()
    }
}
