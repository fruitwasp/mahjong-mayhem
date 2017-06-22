import { Injectable, Inject } from '@angular/core'
import { config } from 'app/config'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { BetterHttpService } from 'app/services'
import { Game, GameTile, GameTemplate } from 'app/models'

@Injectable()
export class GameTemplateService {

    constructor(
        @Inject(BetterHttpService) private http: BetterHttpService
    ) { }

    findAll() {
        return this.http.get(config.BASE_URL + 'gameTemplates')
            .map((response) => {
                response = response.json()

                const gameTemplates = []

                for (const i in response) {
                    if (!response.hasOwnProperty(i)) {
                        continue
                    }

                    gameTemplates.push(new GameTemplate(response[i]))
                }

                return gameTemplates
            })
    }

    find(gameTemplateId: string) {
        return this.http.get(config.BASE_URL + 'gameTemplates/' + gameTemplateId)
            .map((response) => {
                return new GameTemplate(response.json())
            })
    }
}
