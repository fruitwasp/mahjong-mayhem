import { Component, OnInit, Output, EventEmitter } from '@angular/core'

import { LoadingService } from 'app/services'
import { config } from 'app/config'

@Component({
    selector: 'app-game-player-count-selector',
    styleUrls: [
        './game-player-count-selector.component.scss'
    ],
    templateUrl: './game-player-count-selector.component.html'
})
export class GamePlayerCountSelectorComponent implements OnInit {

    public visibility: boolean = false
    public selectedMinPlayers: number = config.MIN_PLAYERS
    public selectedMaxPlayers: number = config.MAX_PLAYERS

    @Output()
    public event = new EventEmitter()

    constructor(
        public loadingService: LoadingService
    ) { }

    ngOnInit() {
    }

    next() {
        if (this.selectedMinPlayers < config.MIN_PLAYERS
            || this.selectedMaxPlayers > config.MAX_PLAYERS) {
            return
        }

        this.event.next({
            minPlayers: this.selectedMinPlayers,
            maxPlayers: this.selectedMaxPlayers
        })
    }

    hide() {
        this.visibility = false
    }

    show() {
        this.visibility = true
    }
}
