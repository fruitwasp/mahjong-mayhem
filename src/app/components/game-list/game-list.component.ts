import { Component, OnInit, Directive, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

import { config } from 'app/config'
import { Game, GameTemplate } from 'app/models'
import { GameService, PlayerService, LoadingService, LocalLoginService, GameStateService } from 'app/services'
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

    @ViewChild('gameTemplateSelector')
    public gameTemplateSelector
    public selectedGameTemplate: GameTemplate

    @ViewChild('gamePlayerCountSelector')
    public gamePlayerCountSelector

    public games: Array<Game>
    public selectedGameState: string = 'open'

    public players: Array<string>
    public selectedPlayer: string

    public config = config

    public pageSize: number = 10
    public pageIndex: number = 1

    constructor(
        public gameService: GameService,
        public playerService: PlayerService,
        public loadingService: LoadingService,
        public localLoginService: LocalLoginService,
        public gameStateService: GameStateService,
        public router: Router
    ) { }

    ngOnInit() {
        this.localLoginService.checkAuthenticated()

        this.page(this.pageIndex, this.pageSize)
    }

    create_step1() {
        this.gameTemplateSelector.show()
    }

    create_step2(gameTemplate: GameTemplate) {
        this.gameTemplateSelector.hide()
        this.gamePlayerCountSelector.show()

        this.selectedGameTemplate = gameTemplate
    }

    create_step3(gameData: any) {
        this.gamePlayerCountSelector.hide()
        this.loadingService.push()

        this.gameService.create({
            templateName: this.selectedGameTemplate._id,
            minPlayers: gameData.minPlayers,
            maxPlayers: gameData.maxPlayers
        }).subscribe((game) => {
            this.loadingService.pop()

            this.view(game)
        })
    }

    view(game: Game) {
        this.gameService.currentGame = game

        this.router.navigate(['games', game._id, 'play'])
    }

    join(game: Game) {
        this.loadingService.push()

        this.playerService.join(game)
            .subscribe(this.loadingService.pop)
    }

    page(pageIndex: number = 1, pageSize: number = 10) {
        this.pageIndex = pageIndex
        this.pageSize = pageSize

        this.games = []

        this.loadingService.push()

        this.gameService.findPaged(pageIndex, pageSize, this.selectedGameState)
            .subscribe((games) => {
                this.games = games

                this.buildPlayers(games)

                this.loadingService.pop()
            })
    }

    refresh() {
        this.page(this.pageIndex, this.pageSize)
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

    onSelectedPlayerChanged(player: string) {
        this.selectedPlayer = player
    }

    gamesCount() {
        return this.games && this.games.length || 0
    }

    yesIsLoading() {
        return this.loadingService.yesIsLoading()
    }

    canJoinGame(game: Game) {
        const user = this.localLoginService.getUser()

        return game.canJoin(user)
    }

    canStartGame(game: Game) {
        const user = this.localLoginService.getUser()

        return game.canStart(user)
    }

    start(game: Game) {
        this.loadingService.push()

        this.gameService.start(game)
            .subscribe((started) => {
                this.loadingService.pop()
                this.page(this.pageIndex, this.pageSize)
            })
    }

    buildPlayers(games: Array<Game>) {
        this.players = [
            config.GAME_PLAYER_FILTERS.NO_GAME_PLAYER
        ]

        for (const game of games) {
            for (const player of game.players) {
                if (this.players.indexOf(player._id) < 0) {
                    this.players.push(player._id)
                }
            }
        }

        return this.players
    }
}
