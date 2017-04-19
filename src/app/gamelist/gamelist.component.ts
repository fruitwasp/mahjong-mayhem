import { Component, OnInit } from '@angular/core';
// TODO: import Angular request the right way.
//import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})

export class Game {
	id: string
	createdBy: [string]
	state: string
	minPlayers: number
	maxPlayers: number
}

export class GamelistComponent implements OnInit {

	// TODO: fetch data. Don't know where to put the code yet.

	url:string = "http://mahjongmayhem.herokuapp.com/games"
	games:[Game]


	// Generated stuff.
  constructor() { 
  	
  }

  ngOnInit() {
  }

}
