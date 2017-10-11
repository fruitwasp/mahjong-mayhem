import { Component, Input, Output, EventEmitter, style } from '@angular/core'
import { GameTile, Game } from 'app/models'
import { LocalGameplayService } from 'app/services'

@Component({
    selector: 'app-game-tile',
    template: `<div [ngStyle]="gameTile.getStyle()" (click)="mark()"></div>`
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
