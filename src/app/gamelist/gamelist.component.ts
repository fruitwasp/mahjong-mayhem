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
  	
  }

    createGame() {
        this.gameService.create(config.USER, config.TOKEN, { })
    }
}