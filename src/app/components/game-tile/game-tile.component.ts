import { Component, Input, style } from '@angular/core'
import { GameTile } from 'app/models'

@Component({
    selector: 'app-game-tile',
    template: `<div class="tile" [ngStyle]="gameTile.getStyle()" (click)="selectTile(gameTile)"></div>`,
    styles: [`
        .tile{
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
}
