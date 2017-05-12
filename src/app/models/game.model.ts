
import { Player, GameTemplate } from './'

export class Game {
    constructor(
        public id: string,
        public createdBy: Player,
        public gameTemplate: GameTemplate,
        public players: Player[],
        public createdOn: string,
        public state: string,
        public minPlayers: number,
        public maxPlayers: number
    ) { }

    static fromJson(json: {
        _id: string,
        createdBy: { _id: string, name: string },
        gameTemplate: { _id: string },
        players: any[],
        createdOn: string,
        state: string,
        minPlayers: number,
        maxPlayers: number
    }) {
        let gameTemplate = GameTemplate.fromJson(json.gameTemplate)
        let players = json.players.map(player => Player.fromJson(player))

        return new this(
            json._id,
            Player.fromJson(json.createdBy),
            gameTemplate,
            players,
            json.createdOn,
            json.state,
            json.minPlayers,
            json.maxPlayers
        )
    }
}
