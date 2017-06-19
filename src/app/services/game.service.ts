import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { config } from 'app/config'
import { Game } from 'app/models'

@Injectable()
export class GameService {

    private httpOptions: RequestOptions
    public currentGame: Game

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

    find(gameId: number): Observable<Game> {
        return this.http.get(config.BASE_URL + 'games/' + gameId, this.httpOptions)
            .map((response) => {
                return new Game(response.json())
            })
    }

    findPaged(pageIndex: number = 1, pageSize: number = 10, gameState: string): Observable<Game[]> {
        const queryParameters = new URLSearchParams()
        queryParameters.append('pageSize', pageSize.toString())
        queryParameters.append('pageIndex', pageIndex.toString())
        queryParameters.append('state', gameState)

        const options = this.httpOptions
        options.search = queryParameters

        return this.http.get(config.BASE_URL + 'games', options)
            .map((response) => {
                const games = []

                for (const gameData of response.json()) {
                    games.push(new Game(gameData))
                }

                return games
            })
    }

    create(gameData): Observable<Game> {
        gameData.templateName = gameData.templateName || 'Shanghai'
        gameData.minPlayers = gameData.minPlayers || 2
        gameData.maxPlayers = gameData.maxPlayers || 32

        return this.http.post(config.BASE_URL + 'games', gameData, this.httpOptions)
            .map(response => {
                return new Game(response.json())
            })
    }
}
