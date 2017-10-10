import { Injectable, Inject } from '@angular/core'
import { RequestOptions } from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { config } from 'app/config'
import { GameState } from 'app/models'
import { BetterHttpService } from 'app/services'

@Injectable()
export class GameStateService {

    constructor(
        @Inject(BetterHttpService) private http: BetterHttpService
    ) { }

    findAll(): Observable<GameState[]> {
        return this.http.get(config.BASE_URL + 'gamestates')
            .map((response) => {
                response = response.json()

                const gameStates = []

                for (const gameState in response) {
                    if (!response.hasOwnProperty(gameState)) {
                        continue
                    }

                    gameStates.push(new GameState(gameState, response[gameState]))
                }

                return gameStates
            })
    }
}
