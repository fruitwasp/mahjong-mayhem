import { Component, OnInit, Directive, Input } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http'
import 'rxjs/Rx'
import { config } from 'app/config'
import { Game } from 'app/models'
import { GameService, PlayerService } from 'app/services'
import { GameFilterPipe } from 'app/pipes'

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    providers: [
        GameService,
        PlayerService,
        GameFilterPipe
    ]
})
export class GameListComponent implements OnInit {

    public games: Array<Game>
    public selectedGameState: string

    public config = config

    public pageSize: number = 10
    public pageIndex: number = 1

    constructor(
        private http: Http,
        private gameService: GameService,
        private playerService: PlayerService
    ) { }

    ngOnInit() {
        this.page(this.pageIndex, this.pageSize)
    }

    create() {
        this.gameService.create({})
            .subscribe(game => {
                console.log(game)
            })
    }

    view(game: Game) {
        this.gameService.selectedGame = game


    }

    join(game: Game) {
        this.playerService.join(game)
            .subscribe(console.log)
    }

    filter() {

    }

    page(pageIndex: number = 1, pageSize: number = 10) {
        this.gameService.findPaged(pageIndex, pageSize)
            .subscribe((games) => {
                this.games = games
            })
    }

    previousPage() {
        if (!this.hasPreviousPage()) {

            return
        }

        this.pageIndex = this.pageIndex - 1
        this.page(this.pageIndex)
    }

    nextPage() {
        if (!this.hasNextPage()) {

            return
        }

        this.pageIndex = this.pageIndex + 1
        this.page(this.pageIndex)
    }

    hasPreviousPage() {
        return this.pageIndex > 1
    }

    hasNextPage() {
        return true
    }
}
