
import { Tile, TileMatch } from './'

export class GameTile {

    public xPos: number
    public yPos: number
    public zPos: number
    public tile: Tile
    public _id: string
    public match: TileMatch

    constructor(json = null) {
        this.xPos = json.xPos
        this.yPos = json.yPos
        this.zPos = json.zPos
        this.tile = new Tile(json.tile)
        this._id = json._id
        this.match = new TileMatch(json.match)
    }

    getStyle(): any {
        return {
            'left': (this.xPos * 18) + 'px',
            'top': (this.yPos * 28 - (this.zPos * 2)) + 'px',
            'z-index': (this.zPos * 100) - this.xPos + this.yPos
        }
    }
}
