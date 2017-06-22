import { Injectable, Inject } from '@angular/core'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { config } from 'app/config'
import { Game } from 'app/models'
import { BetterHttpService } from 'app/services'

@Injectable()
export class PlayerService {

    constructor(
        @Inject(BetterHttpService) private http: BetterHttpService
    ) { }

    join(game: Game) {
        if (!game.hasState('open')) {

            return
        }

        return this.http.post(config.BASE_URL + 'games/' + game._id + '/players', {})
            .map(function(response) {
                return response.json()
            })
    }

    leave(game: Game) {
        if (!game.hasState('open')) {

            return
        }

        return this.http.delete(config.BASE_URL + 'games/' + game._id + '/players')
            .map(function(response) {
                return response.json()
            })
    }
}
