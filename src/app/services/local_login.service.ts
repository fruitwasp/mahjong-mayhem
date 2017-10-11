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

        localStorage.setItem('username', username)
        localStorage.setItem('token', token)

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
            const username = localStorage.getItem('username')
            const token = localStorage.getItem('token')

            if (username && token) {
                return this.login(username, token)
            }

            window.location.href = config.LOGIN_URL + '?callbackUrl=' + document.baseURI + 'login-callback'
        }
    }
}
