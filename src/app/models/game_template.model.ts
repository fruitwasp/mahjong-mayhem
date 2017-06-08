
export class GameTemplate {
    public _id: string

    constructor(json = null) {
        this._id = json._id
    }

    toString() {
        return this._id
    }
}
