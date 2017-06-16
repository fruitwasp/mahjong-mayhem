import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { config } from 'app/config'
import { Observable } from 'rxjs/Observable'
import { Game, GameTile, GameTemplate } from 'app/models'

@Injectable()
export class GameTemplateService {
    constructor(
        private http: Http
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
