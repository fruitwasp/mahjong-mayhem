import { Component, OnInit } from '@angular/core'

import { GameTemplateService } from 'app/services'
import { GameTemplate } from 'app/models'

@Component({
    selector: 'app-game-template-selector',
    templateUrl: './game-template-selector.component.html'
})
export class GameTemplateSelectorComponent implements OnInit {

    public gameTemplates: Array<GameTemplate>

    constructor(public gameTemplateService: GameTemplateService) { }

    ngOnInit() {
        this.gameTemplateService.findAll()
            .subscribe((gameTemplates) => this.gameTemplates)
    }
}
