import { Injectable, Inject } from '@angular/core'
import { Router } from '@angular/router'

import { config } from 'app/config'
import { User } from 'app/models'

@Injectable()
export class LocalLoginService {

    private user: User

    constructor(
        @Inject(Router) public router: Router
    ) { }

    login(username: string, token: string) {
        this.user = new User(username, token)

        return this.user
    }

    userIsAuthenticated(): boolean {
        return this.user !== undefined
    }

    getUser(): User {
        return this.user
    }

    checkAuthenticated() {
        if (!this.userIsAuthenticated()) {
            window.location.href = config.LOGIN_URL + '?callbackUrl=' + document.baseURI + 'login-callback'
        }
    }
}
