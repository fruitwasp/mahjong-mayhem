import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { GameService, GameTemplateService, GameTileService, PlayerService } from './services'
import { GameFilterPipe } from './pipes'
import { GameBoardComponent, GameListComponent, GameTileComponent } from './components'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { RouterModule } from '@angular/router'
import { routes } from './app.routes'

@NgModule({
    declarations: [
        AppComponent,

        GameFilterPipe,

        GameListComponent,
        GameBoardComponent,
        GameTileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,

        RouterModule.forRoot(routes)
    ],
    exports: [],
    providers: [
        GameService,
        GameTemplateService,
        GameTileService,
        PlayerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
