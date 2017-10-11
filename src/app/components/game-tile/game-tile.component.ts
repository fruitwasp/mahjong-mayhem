import { Component, Input, Output, EventEmitter, style } from '@angular/core'
import { GameTile, Game } from 'app/models'
import { LocalGameplayService } from 'app/services'

@Component({
    selector: 'app-game-tile',
    templateUrl: './game-tile.component.html'
})
export class GameTileComponent {

    @Input()
    public gameTile: GameTile

    @Output()
    public event = new EventEmitter()

    mark() {
        this.event.next(this.gameTile)
    }
}
