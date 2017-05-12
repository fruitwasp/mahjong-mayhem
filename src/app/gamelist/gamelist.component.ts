import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Request, RequestMethod } from '@angular/http';
import 'rxjs/Rx';

import { Game } from '../models'

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

	url = "http://mahjongmayhem.herokuapp.com/games"
	games:Observable<Game[]>

  constructor(private http:Http) {
  	this.games = http.get(this.url).map(res => res.json())
  }

  ngOnInit() {
  	console.log("works")
  	console.log(this.games)
  }
}
