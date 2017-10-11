
import { Player, GameTemplate, User, GameTile } from './'

export class Game {

    public _id: string
    public createdBy: { _id: string, name: string }
    public gameTemplate: GameTemplate
    public createdOn: string
    public startedOn: string
    public endedOn: string
    public state: 'open' | 'started' | 'ended'
    public minPlayers: number
    public maxPlayers: number
    public players: Player[]

    public unmatchedTiles: Array<GameTile> = []
    public matchedTiles: Array<GameTile> = []

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

        for (const i in json.players) {
            if (!json.players.hasOwnProperty(i)) {
                continue
            }

            this.players.push(new Player(json.players[i]))
        }
    }

    addPlayers(players: Player[]) {
        this.players = players
    }

    hasState(state: string) {
        return this.state === state
    }

    canView() {
        return !this.hasState('open')
    }

    canJoin(user: User) {
        if (!this.hasState('open')) {
            return false
        }

        if (this.players.length >= this.maxPlayers) {
            return false
        }

        for (const player of this.players) {
            if (player._id === user.username) {
                return false
            }
        }

        return true
    }

    playerCount() {
        return this.players.length
    }

    canStart(user: User) {
        if (this.playerCount() <= this.minPlayers) {
            return false
        }

        return this.createdBy._id === user.username
    }

    matchedTilesCount() {
        return this.matchedTiles.length
    }

    getMatchedTilesUntil(matchedTilesUntil: number) {
        const matchedTiles = this.matchedTiles.slice()

        return matchedTiles.splice(matchedTilesUntil, matchedTiles.length - matchedTilesUntil)
    }
}
