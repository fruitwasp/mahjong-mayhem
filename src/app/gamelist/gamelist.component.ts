import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Request, RequestMethod } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {
	
	// TODO: fetch data. Don't know where to put the code yet.

	url = "http://mahjongmayhem.herokuapp.com/games"
	games:Observable<Game[]>
	// Generated stuff.
  constructor(private http:Http) { 
  	this.games = http.get(this.url).map(res => res.json())
  }

  ngOnInit() {
  	console.log("works")
  	console.log(this.games)
  }
}

export class Game {
	id: string
	createdBy: string[]
	gameTemplate: { id: string }
	players: string[]
	createdOn: string
	state: string
	minPlayers: number
	maxPlayers: number
}
