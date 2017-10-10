import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { config } from 'app/config'
import { LocalLoginService } from 'app/services'

@Component({
    template: '<div></div>'
})
export class LoginComponent implements OnInit {

    private subscription

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private localLoginService: LocalLoginService
    ) { }

    ngOnInit() {
        this.subscription = this.route.queryParams.subscribe(params => {
            this.localLoginService.login(params['username'], params['token'])
            this.router.navigate(['games', 'list'])
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}
