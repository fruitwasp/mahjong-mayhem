import { Injectable, Inject } from '@angular/core'
import { RequestOptions, URLSearchParams } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { config } from 'app/config'
import { Game } from 'app/models'
import { BetterHttpService } from 'app/services'

@Injectable()
export class GameService {

    public currentGame: Game

    constructor(
        @Inject(BetterHttpService) private http: BetterHttpService
    ) { }

    find(gameId: number): Observable<Game> {
        return this.http.get(config.BASE_URL + 'games/' + gameId)
            .map((response) => {
                return new Game(response.json())
            })
    }

    findPaged(pageIndex: number = 1, pageSize: number = 10, gameState: string): Observable<Game[]> {
        const queryParameters = new URLSearchParams()
        queryParameters.append('pageSize', pageSize.toString())
        queryParameters.append('pageIndex', pageIndex.toString())
        queryParameters.append('state', gameState)

        const options = new RequestOptions({
            search: queryParameters
        })

        return this.http.get(config.BASE_URL + 'games', options)
            .map((response) => {
                const games = []

                for (const gameData of response.json()) {
                    games.push(new Game(gameData))
                }

                return games
            })
    }

    create(gameData: any): Observable<Game> {
        gameData.templateName = gameData.templateName || 'Shanghai'
        gameData.minPlayers = gameData.minPlayers || 2
        gameData.maxPlayers = gameData.maxPlayers || config.MAX_PLAYERS

        return this.http.post(config.BASE_URL + 'games', gameData)
            .map(response => {
                return new Game(response.json())
            })
    }

    start(game: Game): Observable<boolean> {
        return this.http.post(config.BASE_URL + 'games/' + game._id + '/start', {})
            .map(response => {
                return response.status === 200
            })
    }
}
