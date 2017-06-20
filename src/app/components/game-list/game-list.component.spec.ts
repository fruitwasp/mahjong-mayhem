import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpModule } from '@angular/http'

import { GameListComponent } from './game-list.component'
import { GameFilterPipe, GamePlayerFilterPipe } from 'app/pipes'

import { Observable } from 'rxjs/Observable'

import { Game } from 'app/models'

import { LoadingService, GameService } from 'app/services'

class MockGameService {
    findPaged(pageIndex: number = 1, pageSize: number = 10, gameState: string): Observable<Game[]> {


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

describe('GameListComponent', () => {
  let component: GameListComponent
  let fixture: ComponentFixture<GameListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule,
            RouterTestingModule
        ],
      declarations: [ GameListComponent, GameFilterPipe, GamePlayerFilterPipe ],
      providers: [
          { provide: LoadingService, useClass: MockLoadingService }
      ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  });
});
