import { GameTile } from 'app/models'

export class GameTemplate {
    public _id: string
    public gameTiles: Array<GameTile>

    constructor(json = null) {
        this._id = json._id
        this.gameTiles = []

        if (json.tiles) {
            for (const gameTileData of json.tiles) {
                this.gameTiles.push(new GameTile(gameTileData))
            }
        }
    }

    toString() {
        return this._id
    }
}
