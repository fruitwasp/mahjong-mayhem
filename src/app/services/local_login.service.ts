import { Http } from '@angular/http'

import { User } from 'app/models'

export class LocalLoginService {

    public user: User

    login(username: string, token: string) {
        this.user = new User(username, token)
    }

    userIsAuthenticated() {
        return this.user !== null
    }

    getUser(): User {
        return this.user
    }
}
