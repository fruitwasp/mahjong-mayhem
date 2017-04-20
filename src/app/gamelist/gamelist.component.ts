import { Component } from '@angular/core';
// TODO: import Angular request the right way.
import { Http, Request, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent {
	
	// TODO: fetch data. Don't know where to put the code yet.

	url:string = "http://mahjongmayhem.herokuapp.com/games/58f7aa7c837d940011819f2f"
	games:Game[]
	http:Http
	// Generated stuff.
  constructor() { 
		console.log("works")
  	console.log(this.request(this.url))
  }

  request(url:string) {
  	return this.http.request(new Request({
      method: RequestMethod.Get,
      url: url
    }));
  }
}

export class Game {
	id: string
	createdBy: string[]
	gameTemplate: string[]
	players: string[]
	createdOn: string
	state: string
	minPlayers: number
	maxPlayers: number
}
