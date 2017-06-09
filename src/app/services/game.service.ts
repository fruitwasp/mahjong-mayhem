
import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http'
import { PagerService } from './'
import { config } from '../config'
import { Observable } from 'rxjs/Observable'
import { Game } from 'app/models'

@Injectable()
export class GameService {
    constructor(
        private http: Http
    ) { }

    find(gameId: number): Observable<Game> {
        return this.http.get(config.BASE_URL + 'games/' + gameId)
            .map((response) => {
                return new Game(response.json())
            })
    }

    findPaged(createdBy: string, pageSize: number = 10, pageIndex: number = 1): Observable<Game[]> {
        const queryParameters = new URLSearchParams()
        queryParameters.append('pageSize', pageSize.toString())
        queryParameters.append('pageIndex', pageIndex.toString())
        queryParameters.append('state', 'open')

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

    create(userName: string, userToken: string, gameData): Observable<Game> {
        gameData.templateName = gameData.templateName || 'Shanghai'
        gameData.minPlayers = gameData.minPlayers || 2
        gameData.maxPlayers = gameData.maxPlayers || 32

        const options = new RequestOptions({
            headers: new Headers({
                'x-username': userName,
                'x-token': userToken
            })
        })

        return this.http.post(config.BASE_URL + 'games', gameData, options)
            .map(response => {
                return new Game(response.json())
            })
    }
}
