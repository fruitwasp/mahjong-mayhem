
export class Game {
    constructor(
        public id: string,
    	public createdBy: string[],
    	public gameTemplate: { id: string },
    	public players: string[],
    	public createdOn: string,
    	public state: string,
    	public minPlayers: number,
    	public maxPlayers: number
    ) { }
}
