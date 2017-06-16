import { RouterModule, Routes } from '@angular/router'
import { GameBoardComponent, GameListComponent, GameTileComponent } from './components'

export const routes: Routes = [
    {
        path: '/games',
        component: GameListComponent
    },
    {
        path: '/games/:gameId/board',
        component: GameBoardComponent
    }
]
