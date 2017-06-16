import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { GameService, PlayerService } from './services'
import { GameFilterPipe } from './pipes'
import { GameBoardComponent, GameListComponent, GameTileComponent } from './components'

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
        HttpModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
