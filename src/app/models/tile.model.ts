
export class Tile {

    public _id: number
    public suit: string
    public name: string
    public matchesWholeSuit: boolean

    constructor(json) {
        this._id = json._id
        this.suit = json.suit
        this.name = json.name
        this.matchesWholeSuit = json.matchesWholeSuit
    }

    isMatch(tile: Tile): boolean {
        return this.suit === tile.suit
            && this.name === tile.name
    }

    getStyleBackground(): string {
        return 'assets/img/' + this.suit + this.name + '.png'
    }
}
