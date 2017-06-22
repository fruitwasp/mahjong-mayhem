import { RouterModule, Routes } from '@angular/router'
import { GameBoardComponent, GameListComponent, GameTileComponent, LoginComponent } from './components'

export const routes: Routes = [
    {
        path: 'games',
        children: [
            {
                path: 'list',
                component: GameListComponent,
                children: [
                    {
                        path: ':gameState',
                        component: GameListComponent
                    }
                ]
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
    },
    {
        path: 'login-callback',
        component: LoginComponent
    }
]
