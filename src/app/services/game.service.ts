
import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { PagerService } from './'
import { config } from '../config'
import { Observable } from 'rxjs/Observable'
import { Game } from "app/models";

@Injectable()
export class GameService {
    constructor(
        private http: Http
    ) { }

    // find(gameId: number): Game[] {
    //     return this.http.get(config.BASE_URL + 'game/' + gameId).map(function)
    // }

    // async findPaged() {
    //     const gamesData = await this.http.get(config.BASE_URL + '/games')

    //     for (let gameData of gamesData) {

    //     }
    // }

    find(gameId: number): Observable<Game> {
        return this.http.get(config.BASE_URL + 'games/' + gameId)
            .map((response) => {
                return new Game(response.json())
            })
    }

    findPaged(createdBy: string, pageSize: number = 10, pageIndex: number = 1): Observable<Game[]> {
        const queryParameters = new URLSearchParams()
        queryParameters.set('pageSize', pageSize.toString())
        queryParameters.set('pageIndex', pageIndex.toString())

        const options = new RequestOptions({
            search: queryParameters
        })

        return this.http.get(config.BASE_URL + '/games', options)
            .map((response) => {
                const games = []

                for (const gameData of response.json()) {
                    games.push(new Game(gameData))
                }

                return games
            })
    }

    create(userName: string, userToken: string, gameData: any) {
        gameData.templateName = gameData.templateName || 'Shanghai'
        gameData.minPlayers = gameData.minPlayers || 2
        gameData.maxPlayers = gameData.maxPlayers || 32

        const options = new RequestOptions()
        options.headers.set('x-username', userName)
        options.headers.set('x-token', userToken)

        return this.http.post(config.BASE_URL + 'games', gameData.json(), options)
            .map(function(response) {
                return new Game(response.json())
            })
    }
}
