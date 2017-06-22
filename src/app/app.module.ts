import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import {
    GameService,
    GameTemplateService,
    GameTileService,
    PlayerService,
    LocalGameplayService,
    LoadingService,
    LocalLoginService,
    BetterHttpService
} from './services'
import { GameFilterPipe, GamePlayerFilterPipe } from './pipes'
import {
    GameBoardComponent,
    GameListComponent,
    GameTileComponent,
    NavigationComponent,
    GameTemplateSelectorComponent,
    LoadingComponent,
    LoginComponent
} from './components'

import { RouterModule } from '@angular/router'
import { routes } from './app.routes'

@NgModule({
    declarations: [
        AppComponent,

        GameFilterPipe,
        GamePlayerFilterPipe,

        GameBoardComponent,
        GameListComponent,
        GameTileComponent,
        NavigationComponent,
        GameTemplateSelectorComponent,
        LoadingComponent,
        LoginComponent
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
        LocalLoginService,
        BetterHttpService,
        GameService,
        GameTemplateService,
        GameTileService,
        PlayerService,
        LocalGameplayService,
        LoadingService

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
