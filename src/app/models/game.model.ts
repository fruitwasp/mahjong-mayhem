
import { Player, GameTemplate } from './'

export class Game {

    public _id: string
    public createdBy: { _id: string, name: string }
    public gameTemplate: GameTemplate
    public createdOn: string
    public startedOn: string
    public endedOn: string
    public state: string
    public minPlayers: number
    public maxPlayers: number
    public players: Player[]

    constructor(json = null) {
        this._id = json._id
        this.createdBy = json.createdBy
        this.gameTemplate = new GameTemplate(json.gameTemplate)
        this.createdOn = json.createdOn
        this.startedOn = json.startedOn
        this.endedOn = json.endedOn
        this.state = json.state
        this.minPlayers = json.minPlayers
        this.maxPlayers = json.maxPlayers

        this.players = []

        for (let i in json.players) {
            if (!json.players.hasOwnProperty(i)) {
                continue
            }

            this.players.push(new Player(json.players[i]))
        }
    }

    addPlayers(players: Player[]) {
        this.players = players
    }
}
