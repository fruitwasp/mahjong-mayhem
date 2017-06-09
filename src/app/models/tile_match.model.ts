
export class TileMatch {

    public foundBy: string
    public otherTileId: string
    public foundOn: string

    constructor(json = null) {
        this.foundBy = json.foundBy
        this.otherTileId = json.otherTyleId
        this.foundOn = json.foundOn
    }
}
