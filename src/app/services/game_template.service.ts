import { Injectable, Inject } from '@angular/core'
import { config } from 'app/config'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { HttpService } from 'app/services'
import { Game, GameTile, GameTemplate } from 'app/models'

@Injectable()
export class GameTemplateService {

    constructor(
        @Inject(HttpService) private http: HttpService
    ) { }

    findAll() {
        return this.http.get(config.BASE_URL + 'gameTemplates', this.http.getRequestOptions())
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
        return this.http.get(config.BASE_URL + 'gameTemplates/' + gameTemplateId, this.http.getRequestOptions())
            .map((response) => {
                return new GameTemplate(response.json())
            })
    }
}
