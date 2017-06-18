import { Component, OnInit, Output } from '@angular/core'

import { GameService } from 'app/services'
import { Game } from 'app/models'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [
        GameService
    ]
})
export class AppComponent implements OnInit {

    ngOnInit() {

    }
}
