import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { GameTile } from 'app/models'
import { GameService, GameTileService, GameTemplateService } from 'app/services'

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html'
})
export class GameBoardComponent implements OnInit {

    public gameTiles: GameTile[]

    constructor(
        public gameService: GameService,
        public gameTileService: GameTileService,
        public gameTemplateService: GameTemplateService
    ) { }

    ngOnInit() {
        const game = this.gameService.selectedGame

        this.gameTileService.find(game)
            .subscribe((gameTiles) => this.gameTiles)
    }
}
