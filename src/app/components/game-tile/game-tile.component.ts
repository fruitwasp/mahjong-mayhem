import { Component, Input, style } from '@angular/core'
import { GameTile, Game } from 'app/models'
import { LocalGameplayService } from 'app/services'

@Component({
    selector: 'app-game-tile',
    template: `<div [ngStyle]="gameTile.getStyle()" (click)="mark()"></div>`
})
export class GameTileComponent {

    @Input()
    public gameTile: GameTile

    constructor(
        public localGameplayService: LocalGameplayService
    ) { }

    mark() {
        console.log(this.gameTile)

        this.localGameplayService.markGameTile(this.gameTile)
    }
}
