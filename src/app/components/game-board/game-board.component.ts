import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Game, GameTemplate, GameTile } from 'app/models'
import { GameService, GameTileService, GameTemplateService, LocalGameplayService } from 'app/services'

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html'
})
export class GameBoardComponent implements OnInit {

    public game: Game
    public gameTemplate: GameTemplate
    public gameTiles: Array<GameTile>

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
            })

        gameTileService.findById(gameId)
            .subscribe((gameTiles) => {
                this.gameTiles = gameTiles

                this.linkGameTiles(gameTiles)
            })
    }

    ngOnInit() { }

    linkGameTiles(gameTiles: Array<GameTile>) {

    }
}
