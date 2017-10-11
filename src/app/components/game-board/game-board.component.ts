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
    ) { }

    ngOnInit() {
        const gameId = this.route.snapshot.params.gameId

        this.gameService.find(gameId)
            .subscribe((game) => {
                this.game = game
                this.localGameplayService.selectedGame = game

                this.gameTileService.find(game)
                    .subscribe((gameTiles) => {
                        for (const gameTile of gameTiles) {
                            if (gameTile.hasMatch()) {
                                game.matchedTiles.push(gameTile)
                            } else {
                                game.unmatchedTiles.push(gameTile)
                            }
                        }

                        game.matchedTiles.sort(function(a, b) {
                            return a.match.foundOn.localeCompare(b.match.foundOn)
                        })
                        this.matchedTilesUntil = 0
                    })
            })
     }

    markTile(gameTile: GameTile) {
        this.localGameplayService.markGameTile(gameTile)
    }

    getMatchedTilesUntil(matchedTilesUntil: number) {
        return this.game.getMatchedTilesUntil(matchedTilesUntil)
    }
}
