import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Game, GameTemplate, GameTile } from 'app/models'
import { GameService, GameTileService, GameTemplateService, LocalGameplayService, NotificationManager } from 'app/services'

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html'
})
export class GameBoardComponent implements OnInit {

    public game: Game
    public gameTemplate: GameTemplate
    public gameTiles: Array<GameTile>

    public unmatchedTiles: Array<GameTile>

    constructor(
        public gameService: GameService,
        public gameTileService: GameTileService,
        public gameTemplateService: GameTemplateService,
        public route: ActivatedRoute,
        public localGameplayService: LocalGameplayService
    ) {
        const gameId = route.snapshot.params.gameId

        this.unmatchedTiles = []

        gameService.find(gameId)
            .subscribe((game) => {
                this.game = game
                this.localGameplayService.selectedGame = game

                gameTileService.find(game)
                    .subscribe((gameTiles) => {
                        this.unmatchedTiles = gameTiles
                    })
            })
    }

    ngOnInit() { }

    markTile(gameTile: GameTile) {
        console.log(gameTile)

        this.localGameplayService.markGameTile(gameTile)
    }
}
