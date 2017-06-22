import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { config } from 'app/config'
import { LocalLoginService } from 'app/services'

@Component({
    template: '<div></div>'
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private localLoginService: LocalLoginService
    ) { }

    ngOnInit() {
        const username = this.route.queryParams['username']
        const token = this.route.queryParams['token']

        this.localLoginService.login(username, token)
        this.router.navigate(['games', 'list'])
    }
}
