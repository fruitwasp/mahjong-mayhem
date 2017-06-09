import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './material.module'
import { AppComponent } from './app.component'
import { GamelistComponent } from './gamelist/gamelist.component'

import { GameService, PlayerService } from './services'

@NgModule({
    declarations: [
        AppComponent,
        GamelistComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
