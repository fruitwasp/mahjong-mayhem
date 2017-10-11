import { Injectable } from '@angular/core'

import { config } from 'app/config'
import { Game, GameTile } from 'app/models'
import { GameTileService } from 'app/services'

@Injectable()
export class LocalGameplayService {

    public selectedGame: Game
    public selectedGameTiles: Array<GameTile>

    constructor(public gameTileService: GameTileService) {
        this.selectedGameTiles = []
    }

    markGameTile(gameTile: GameTile) {
        if (this.selectedGameTiles.length > 1) {
            return false
        }

        this.selectedGameTiles.push(gameTile)

        if (this.selectedGameTiles.length > 1) {
            this.matchMarkedTiles()
        }
    }

    unmarkGameTile(gameTile: GameTile) {
        if (this.selectedGameTiles.length < 1) {
            return false
        }

        const i = this.selectedGameTiles.indexOf(gameTile)

        if (!i) {
            return false
        }

        this.selectedGameTiles.splice(i, 1)
    }

    matchMarkedTiles() {
        if (this.selectedGameTiles.length < 2) {
            return false
        }

        console.log(this.selectedGameTiles)

        const thisTile = this.selectedGameTiles[0]
        const thatTile = this.selectedGameTiles[1]

        this.gameTileService.match(thisTile, thatTile, this.selectedGame)
    }
}
