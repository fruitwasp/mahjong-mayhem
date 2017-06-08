import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Game } from '../models'

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  user = "s.mommersteeg@student.avans.nl"
	url = "http://mahjongmayhem.herokuapp.com/games"
	games:Observable<Game[]>

  constructor(private http:Http) {
  	this.games = http.get(this.url).map(res => res.json())
  }

  ngOnInit() {
  	console.log("works")
  	console.log(this.games)
  }

  createGame() {

    var game = {
      "templateName": "Shanghai",
      "minPlayers": "2",
      "maxPlayers": "12"
    }

    var options = new RequestOptions({
      headers: new Headers ({
        "x-username": this.user,
        "x-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InMubW9tbWVyc3RlZWdAc3R1ZGVudC5hdmFucy5ubCI.FvLBJIWzgyYpzSCMGlnI0g_PEN7WzpHib2_T8X1G_-E"
      })
    })

    let thing = this.http.post("http://mahjongmayhem.herokuapp.com/games", game, options)
      .map(res => res.json())
      .subscribe((game) => {
           console.log(game)
      });

 
  }

}