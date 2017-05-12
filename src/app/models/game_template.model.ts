
export class GameTemplate {
    constructor(
        public id: string
    ) { }

    static fromJson(json: { _id: string }) {
        return new this(
            json._id
        )
    }
}
