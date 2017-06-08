
import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { PagerService } from './'
import { config } from '../config'
import { Observable } from 'rxjs/Observable'
import { Game } from '../models'

@Injectable()
export class PlayerService {
    constructor(
        private http: Http
    ) { }

    join(game: Game) {
        return this.http.post(config.BASE_URL + 'games/' + game._id + '/players', {})
            .map(function(response) {
                return response.json()
            })
    }

    leave(game: Game) {
        return this.http.delete(config.BASE_URL + 'games/' + game._id + '/players', {})
            .map(function(response) {
                return response.json()
            })
    }
}
