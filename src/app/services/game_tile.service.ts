
import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { PagerService } from './'
import { config } from '../config'
import { Observable } from 'rxjs/Observable'
import { Game, GameTile } from '../models'

@Injectable()
export class GameTileService {
    constructor(
        private http: Http
    ) { }

    find(game: Game) {
        //TODO: show matched or not matched tiles query param

        return this.http.get(config.BASE_URL + 'games/' + game._id + '/tiles')
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

    findMatches(game: Game) {
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
