
import { Tile, TileMatch } from './'

export class GameTile {

    public xPos: number
    public yPos: number
    public zPos: number
    public tile: Tile
    public _id: string
    public match: TileMatch

    constructor(json) {
        this.xPos = json.xPos
        this.yPos = json.yPos
        this.zPos = json.zPos

        if (json.tile) {
            this.tile = new Tile(json.tile)
        }

        this._id = json._id

        if (json.match) {
            this.match = new TileMatch(json.match)
        }
    }

    getStyle(): any {
        return {
            'left': (this.xPos * 18) + 'px',
            'top': (this.yPos * 28 - (this.zPos * 2)) + 'px',
            'z-index': (this.zPos * 100) - this.xPos + this.yPos,
            'background-image': 'url("' + this.tile.getStyleBackground() + '")',
            'background-size': 'cover',
            'position': 'absolute',
            'width': '40px',
            'height': '60px'
        }
    }

    isMatch(gameTile: GameTile) {
        return this.tile.isMatch(gameTile.tile)
    }

    canMatch() {
        // TODO: position checking
        return true
    }

    hasMatch() {
        return this.match instanceof TileMatch
    }
}
