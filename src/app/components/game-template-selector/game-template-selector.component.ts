import { Component, OnInit } from '@angular/core'

import { GameTemplateService, LoadingService } from 'app/services'
import { GameTemplate } from 'app/models'

@Component({
    selector: 'app-game-template-selector',
    styleUrls: [
        './game-template-selector.component.scss'
    ],
    templateUrl: './game-template-selector.component.html'
})
export class GameTemplateSelectorComponent implements OnInit {

    public gameTemplates: Array<GameTemplate>
    public visibility: boolean = false

    constructor(
        public gameTemplateService: GameTemplateService,
        public loadingService: LoadingService
    ) { }

    ngOnInit() {
        this.loadingService.push()

        this.gameTemplateService.findAll()
            .subscribe((gameTemplates) => {
                this.gameTemplates = gameTemplates

                this.loadingService.pop()
            })
    }

    toggle() {
        this.visibility = !this.visibility
    }
}
