
export class Player {

    public _id: string
    public name: string

    constructor(json) {
        this._id = json._id
        this.name = json.name
    }
}
