import { Component, OnInit, Directive, Input } from '@angular/core'
import { Router } from '@angular/router'

import { config } from 'app/config'
import { Game } from 'app/models'
import { GameService, PlayerService, LoadingService } from 'app/services'
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
    public selectedGameState: string = 'open'
    public selectedGamePlayer: string

    public config = config

    public pageSize: number = 10
    public pageIndex: number = 1

    constructor(
        public gameService: GameService,
        public playerService: PlayerService,
        public loadingService: LoadingService,
        public router: Router
    ) { }

    ngOnInit() {
        this.page(this.pageIndex, this.pageSize)
    }

    preCreate() {

    }

    create() {
        this.loadingService.push()

        this.gameService.create({})
            .subscribe(this.loadingService.pop)
    }

    view(game: Game) {
        this.gameService.currentGame = game

        this.router.navigate(['games', game._id, 'play'], game)
    }

    join(game: Game) {
        this.loadingService.push()

        this.playerService.join(game)
            .subscribe(this.loadingService.pop)
    }

    page(pageIndex: number = 1, pageSize: number = 10) {
        this.games = []

        this.loadingService.push()

        this.gameService.findPaged(pageIndex, pageSize, this.selectedGameState)
            .subscribe((games) => {
                this.games = games

                this.loadingService.pop()
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

    onSelectedGameStateChanged(gameState: string) {
        this.selectedGameState = gameState

        this.page(this.pageIndex, this.pageSize)
    }

    gamesCount() {
        return this.games && this.games.length || 0
    }
}
