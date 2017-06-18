import { Component, Input, style } from '@angular/core'
import { GameTile } from 'app/models'
import { LocalGameplayService } from 'app/services'

@Component({
    selector: 'app-game-tile',
    template: `<div class="tile" [ngStyle]="gameTile.getStyle()" (click)="mark()"></div>`,
    styles: [`
        .tile {
            background-image: url("http://mahjongmayhem.herokuapp.com/Tiles_sprite3.png");
            background-size: cover;
            position: absolute;
            width: 40px;
            height: 60px;
        }
    `]
})
export class GameTileComponent {

    @Input()
    public gameTile: GameTile

    constructor(
        public localGameplayService: LocalGameplayService
    ) { }

    mark() {
        this.localGameplayService.markGameTile(this.gameTile)
    }
}
