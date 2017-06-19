import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { config } from 'app/config'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable'

import { Game, GameTile, GameTemplate } from 'app/models'

@Injectable()
export class GameTemplateService {

    private httpOptions: RequestOptions

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

    findAll() {
        return this.http.get(config.BASE_URL + 'gameTemplates', this.httpOptions)
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
        return this.http.get(config.BASE_URL + 'gameTemplates/' + gameTemplateId, this.httpOptions)
            .map((response) => {
                return new GameTemplate(response.json())
            })
    }
}
