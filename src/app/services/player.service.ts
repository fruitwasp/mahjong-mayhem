
import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { PagerService } from './'
import { config } from '../config'
import { Observable } from 'rxjs/Observable'
import { Game } from "../models"

@Injectable()
export class GameService {
    constructor(
        private http: Http
    ) { }

    join(game: Game) {

    }
}
