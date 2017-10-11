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

    public matchedTilesUntil: number = 0

    constructor(
        public gameService: GameService,
        public gameTileService: GameTileService,
        public gameTemplateService: GameTemplateService,
        public route: ActivatedRoute,
        public localGameplayService: LocalGameplayService
    ) {
        const gameId = route.snapshot.params.gameId

        gameService.find(gameId)
            .subscribe((game) => {
                this.game = game
                this.localGameplayService.selectedGame = game

                gameTileService.find(game, false)
                    .subscribe((gameTiles) => {
                        game.unmatchedTiles = gameTiles

                        console.log(gameTiles)
                    })

                gameTileService.find(game, true)
                    .subscribe((gameTiles) => {
                        game.matchedTiles = gameTiles

                        this.matchedTilesUntil = game.matchedTilesCount()
                    })
            })
    }

    ngOnInit() { }

    markTile(gameTile: GameTile) {
        console.log(gameTile)

        this.localGameplayService.markGameTile(gameTile)
    }

    getMatchedTilesUntil(matchedTilesUntil: number) {
        return this.game.getMatchedTilesUntil(matchedTilesUntil)
    }
}
