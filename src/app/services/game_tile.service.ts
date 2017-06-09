
import { Injectable } from '@angular/core'
import { Http, RequestOptions, URLSearchParams } from '@angular/http'
import { config } from 'app/config'
import { Observable } from 'rxjs/Observable'
import { Game, GameTile } from 'app/models'

@Injectable()
export class GameTileService {
    constructor(
        private http: Http
    ) { }

    find(game: Game, matchedOrUnmatched: boolean = true): Observable<GameTile[]> {
        const queryParameters = new URLSearchParams()
        queryParameters.append('matched', matchedOrUnmatched.toString())

        const options = new RequestOptions({
            search: queryParameters
        })

        return this.http.get(config.BASE_URL + 'games/' + game._id + '/tiles', options)
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

    match(thisTile: GameTile, thatTile: GameTile, game: Game) {
        return this.http.put(config.BASE_URL + 'games/' + game._id + '/tiles', {
            tile1Id: thisTile._id,
            tile2Id: thatTile._id
        }).map(response => {
            return response.json()
        })
    }

    findMatches(game: Game): Observable<GameTile[]> {
        return this.http.get(config.BASE_URL + '/games/' + game._id + '/tiles/matches', {

        }).map(response => {
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
