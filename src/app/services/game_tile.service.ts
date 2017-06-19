import { Injectable } from '@angular/core'
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { config } from 'app/config'
import { Game, GameTile } from 'app/models'

@Injectable()
export class GameTileService {

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

    findById(gameId: string, matchedOrUnmatched: boolean = false): Observable<GameTile[]> {
        const queryParameters = new URLSearchParams()
        // queryParameters.append('matched', matchedOrUnmatched.toString())

        const options = this.httpOptions
        options.search = queryParameters

        return this.http.get(config.BASE_URL + 'games/' + gameId + '/tiles', options)
            .map((response) => {
                response = response.json()

                const tiles = []

                for (const i in response) {
                    if (response.hasOwnProperty(i)) {
                        continue
                    }

                    tiles.push(new GameTile(response[i]))
                }

                return tiles
            })
    }

    find(game: Game, matchedOrUnmatched: boolean = true): Observable<GameTile[]> {
        return this.findById(game._id, matchedOrUnmatched)
    }

    match(thisTile: GameTile, thatTile: GameTile, game: Game) {
        return this.http.put(config.BASE_URL + 'games/' + game._id + '/tiles', {
            tile1Id: thisTile._id,
            tile2Id: thatTile._id
        }, this.httpOptions)
            .map(response => {
                return response.json()
            })
    }

    findMatches(game: Game): Observable<GameTile[]> {
        return this.http.get(config.BASE_URL + '/games/' + game._id + '/tiles/matches', this.httpOptions)
            .map(response => {
                response = response.json()

                const matches = []

                for (const i in response) {
                    if (!response.hasOwnProperty(i)) {
                        continue
                    }

                    matches.push(new GameTile(response[i]))
                }

                return matches
            })
    }
}
