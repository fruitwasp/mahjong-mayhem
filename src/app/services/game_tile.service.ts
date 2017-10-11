import { Injectable, Inject } from '@angular/core'
import { RequestOptions } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { config } from 'app/config'
import { Game, GameTile } from 'app/models'
import { BetterHttpService } from 'app/services'

@Injectable()
export class GameTileService {

    constructor(
        @Inject(BetterHttpService) private http: BetterHttpService
    ) { }

    find(game: Game): Observable<GameTile[]> {
        return this.http.get(config.BASE_URL + 'games/' + game._id + '/tiles')
            .map((response) => {
                response = response.json()

                const tiles = []

                for (const i in response) {
                    if (!response.hasOwnProperty(i)) {
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
        return this.http.get(config.BASE_URL + 'games/' + game._id + '/tiles/matches')
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
