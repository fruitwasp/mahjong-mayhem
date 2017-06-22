import { Injectable, Inject } from '@angular/core'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { config } from 'app/config'
import { Game } from 'app/models'
import { HttpService } from 'app/services'

@Injectable()
export class PlayerService {

    constructor(
        @Inject(HttpService) private http: HttpService
    ) { }

    join(game: Game) {
        if (!game.hasState('open')) {

            return
        }

        return this.http.post(config.BASE_URL + 'games/' + game._id + '/players', {}, this.http.getRequestOptions())
            .map(function(response) {
                return response.json()
            })
    }

    leave(game: Game) {
        if (!game.hasState('open')) {

            return
        }

        return this.http.delete(config.BASE_URL + 'games/' + game._id + '/players', this.http.getRequestOptions())
            .map(function(response) {
                return response.json()
            })
    }
}
