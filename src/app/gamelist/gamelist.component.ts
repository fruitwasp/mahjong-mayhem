import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http'
import { MdButton } from '@angular/material'
import 'rxjs/Rx'
import { config } from '../config'
import { Game } from '../models'
import { GameService, PlayerService } from '../services'

@Component({
    selector: 'app-gamelist',
    templateUrl: './gamelist.component.html',
    styleUrls: ['./gamelist.component.css'],
    providers: [
        GameService,
        PlayerService
    ]
})
export class GamelistComponent implements OnInit {

    games: Game[]

    constructor(
        private http: Http,
        private gameService: GameService
    ) { }

    ngOnInit() {
        this.gameService.findPaged("1").subscribe((games) => {
            this.games = games
        })
    }

    createGame() {
        this.gameService.create(config.USER, config.TOKEN, {})
        .subscribe(game => {
          console.log(game)
        })
    }
}
