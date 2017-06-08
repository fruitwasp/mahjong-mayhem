import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http'
import 'rxjs/Rx'
import { config } from '../config'
import { Game } from '../models'
import { GameService } from 'app/services'

@Component({
    selector: 'app-gamelist',
    templateUrl: './gamelist.component.html',
    styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

	games:Observable<Game[]>
  
    constructor(
        private http: Http,
        private gameService: GameService
    ) { }

    ngOnInit() {
      this.gameService.findPaged("1").subscribe((game) => {})
  	
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
        "x-username": config.USER,
        "x-token": config.TOKEN
      })
    })

    let thing = this.http.post("http://mahjongmayhem.herokuapp.com/games", game, options)
      .map(res => res.json())
      .subscribe((game) => {
           console.log(game)
      });

 
  }

}
