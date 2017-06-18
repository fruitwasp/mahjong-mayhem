import { RouterModule, Routes } from '@angular/router'
import { GameBoardComponent, GameListComponent, GameTileComponent } from './components'

export const routes: Routes = [
    {
        path: 'games',
        children: [
            {
                path: 'list',
                component: GameListComponent,
            },
            {
                path: ':gameId',
                children: [
                    {
                        path: 'play',
                        component: GameBoardComponent
                    }
                ]
            }
        ]
    }
]
