
export class Player {
    constructor(
        public id: string,
        public name: string
    ) { }

    static fromJson(json: {
        _id: string,
        name: string
    }) {
        return new this(
            json._id,
            json.name
        )
    }
}
