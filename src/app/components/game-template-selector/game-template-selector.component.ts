import { Component, OnInit, Output, EventEmitter } from '@angular/core'

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
    public selectedGameTemplate: GameTemplate

    @Output()
    public event = new EventEmitter()

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

    hide() {
        this.visibility = false
    }

    show() {
        this.visibility = true
    }

    selectGameTemplate(gameTemplate: GameTemplate) {
        this.selectedGameTemplate = gameTemplate
    }

    next() {
        this.event.next(this.selectedGameTemplate)
    }

    yesIsLoading() {
        return this.loadingService.yesIsLoading()
    }
}
