import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http'

import { GameBoardComponent, LoadingComponent, GameTemplateSelectorComponent, GameTileComponent } from 'app/components'
import { GameFilterPipe, GamePlayerFilterPipe } from 'app/pipes'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

import { Game, GameTile, Tile } from 'app/models'

import { LoadingService, GameService, GameTileService, GameTemplateService, LocalGameplayService } from 'app/services'

class MockGamePlayService {
    public selectedGame: Game
    public selectedGameTiles: Array<GameTile>
}

class MockTileService {
    find() {
        return Observable.of([{}])
    }

    findById() {
        return Observable.of([new GameTile({"tile":new Tile({
            "_id": "1234" ,
            "name": "1",
            "suit": "bamboo"
        })})])
    }

}

class MockGameService {
    findPages() {
        return Observable.of([{}, {}])
    }

    find() {
        return Observable.of({})
    }
}

class MockTemplateService {
    findAll() {
        return Observable.of( [{}] )
    }
}

class MockLoadingService {
    private yesIsLoadingCount = 0

    push() {
        this.yesIsLoadingCount++

        return this.yesIsLoadingCount
    }

    pop() {
        if (this.yesIsLoading()) {
            this.yesIsLoadingCount--
        }

        return this.yesIsLoadingCount
    }

    yesIsLoading() {
        return this.yesIsLoadingCount > 0
    }
}

describe('GameBoardComponent', () => {

  let component: GameBoardComponent
  let fixture: ComponentFixture<GameBoardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule,
            RouterTestingModule
        ],
      declarations: [ GameBoardComponent, GameTileComponent, GameFilterPipe, LoadingComponent, GamePlayerFilterPipe,
      GameTemplateSelectorComponent, GameTileComponent ],
      providers: [
          { provide: LoadingService, useClass: MockLoadingService },
          { provide: GameService, useClass: MockGameService },
          { provide: GameTileService, useClass: MockTileService },
          { provide: GameTemplateService, useClass: MockTemplateService },
          { provide: LocalGameplayService, useClass: MockGamePlayService }
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
