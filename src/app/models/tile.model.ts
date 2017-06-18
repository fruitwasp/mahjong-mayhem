
export class Tile {

    public _id: number
    public suit: string
    public name: string
    public matchesWholeSuit: boolean

    constructor(json = null) {
        this._id = json._id
        this.suit = json.suit
        this.name = json.name
        this.matchesWholeSuit = json.matchesWholeSuit
    }

    isMatch(tile: Tile) {
        return this.suit === tile.suit
            && this.name === tile.name
    }
}
