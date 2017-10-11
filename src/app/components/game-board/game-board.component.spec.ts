import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http'

import { GameBoardComponent, LoadingComponent, GameTemplateSelectorComponent, GameTileComponent } from 'app/components'
import { GameFilterPipe, GamePlayerFilterPipe } from 'app/pipes'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of' 

import { Game, GameTile, Tile } from 'app/models'

import { LoadingService, GameService, GameTileService, GameTemplateService, LocalGameplayService } from 'app/services'
import { FormsModule } from '@angular/forms';
import { MockTileService } from 'test/TileService.mock';
import { MockGameService } from 'test/GameService.mock';

class MockGamePlayService {
    public selectedGame: Game 
    public selectedGameTiles: Array<GameTile>
}

class MockTemplateService {
  findAll() {
      return Observable.of( [] )
  }
}


describe('GameBoardComponent', () => {

  let component: GameBoardComponent
  let fixture: ComponentFixture<GameBoardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            FormsModule,
            HttpModule,
            RouterTestingModule
        ],
      declarations: [ GameBoardComponent, GameTileComponent, GameFilterPipe, LoadingComponent, GamePlayerFilterPipe,
      GameTemplateSelectorComponent, GameTileComponent ],
      providers: [
        LoadingService,
        { provide: GameTemplateService, useClass: MockTemplateService },
        { provide: GameService, useClass: MockGameService },
        { provide: GameTileService, useClass: MockTileService },
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
    expect(component).toBeTruthy();
    expect(component.localGameplayService.selectedGame._id).toEqual(0);
  })
})
