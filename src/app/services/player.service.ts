
import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { config } from 'app/config'
import { Game } from 'app/models'

@Injectable()
export class PlayerService {
    constructor(
        private http: Http
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

        return this.http.delete(config.BASE_URL + 'games/' + game._id + '/players', {})
            .map(function(response) {
                return response.json()
            })
    }
}
