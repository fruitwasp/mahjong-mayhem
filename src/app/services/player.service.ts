import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { config } from 'app/config'
import { Game } from 'app/models'

@Injectable()
export class PlayerService {

    private httpOptions: RequestOptions

    constructor(
        private http: Http
    ) {
        this.httpOptions = new RequestOptions({
            headers: new Headers({
                'x-username': config.USER,
                'x-token': config.TOKEN
            })
        })
    }

    join(game: Game) {
        if (!game.hasState('open')) {

            return
        }

        return this.http.post(config.BASE_URL + 'games/' + game._id + '/players', {}, this.httpOptions)
            .map(function(response) {
                return response.json()
            })
    }

    leave(game: Game) {
        if (!game.hasState('open')) {

            return
        }

        return this.http.delete(config.BASE_URL + 'games/' + game._id + '/players', this.httpOptions)
            .map(function(response) {
                return response.json()
            })
    }
}
