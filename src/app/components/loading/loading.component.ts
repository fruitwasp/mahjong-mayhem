import { Component } from '@angular/core'

import { LoadingService } from 'app/services'

@Component({
    selector: 'app-loading',
    template: `<div [hidden]='!yesIsLoading()'><a class='button is-loading' style='width: 100% !important;'></a></div>`
})
export class LoadingComponent {

    constructor(public loadingService: LoadingService) { }

    yesIsLoading() {
        return this.loadingService.yesIsLoading()
    }
}
