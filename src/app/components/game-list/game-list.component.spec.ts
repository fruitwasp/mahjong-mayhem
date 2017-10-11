// import { async, ComponentFixture, TestBed } from '@angular/core/testing'
// import { RouterTestingModule } from '@angular/router/testing'
// import { HttpModule } from '@angular/http'

// import { GameListComponent, LoadingComponent, GameTemplateSelectorComponent, GameTileComponent } from 'app/components'
// import { GameFilterPipe, GamePlayerFilterPipe } from 'app/pipes'

// import { Observable } from 'rxjs/Observable'
// import 'rxjs/add/observable/of'

// import { Game } from 'app/models'

// import { LoadingService, GameService, GameTemplateService } from 'app/services'

// // class MockGameService {
// //     findPaged(pageIndex: number = 1, pageSize: number = 10, gameState: string): Observable<Game[]> {


// //     }
// // }
// class MockGameService {
//     create(gameData) {
//         gameData.templateName = gameData.templateName || 'Shanghai'
//         gameData.minPlayers = gameData.minPlayers || 2
//         gameData.maxPlayers = gameData.maxPlayers || 32

//         return new Game({"gameTemplate": gameData.templateName, "minPlayers": gameData.minPlayers, "maxPlayers": gameData.maxPlayers})
//     }
// }

// class MockTemplateService {
//     findAll() {
//         return Observable.of( [{}] )
//     }
// }

// class MockLoadingService {
//     private yesIsLoadingCount = 0

//     push() {
//         this.yesIsLoadingCount++

//         return this.yesIsLoadingCount
//     }

//     pop() {
//         if (this.yesIsLoading()) {
//             this.yesIsLoadingCount--
//         }

//         return this.yesIsLoadingCount
//     }

//     yesIsLoading() {
//         return this.yesIsLoadingCount > 0
//     }
// }

// describe('GameListComponent', () => {

//   let component: GameListComponent
//   let fixture: ComponentFixture<GameListComponent>
//   let compiled: any

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         imports: [
//             HttpModule,
//             RouterTestingModule
//         ],
//       declarations: [ GameListComponent, GameFilterPipe, LoadingComponent, GamePlayerFilterPipe,
//         GameTemplateSelectorComponent,
//         GameTileComponent ],
//       providers: [
//           { provide: LoadingService, useClass: MockLoadingService },
//           { provide: GameTemplateService, useClass: MockTemplateService },
//           { provide: GameService, useClass: MockGameService }
//       ]
//     })
//     .compileComponents()
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(GameListComponent)
//     component = fixture.componentInstance
//     compiled = fixture.debugElement.nativeElement
//     fixture.detectChanges()
//   })

//   it('should be created', () => {
//     expect(component).toBeTruthy()
//   })
// })
