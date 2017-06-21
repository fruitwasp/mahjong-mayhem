import { TestBed, async } from '@angular/core/testing'
import { MockBackend, MockConnection } from '@angular/http/testing'

import { RouterTestingModule } from '@angular/router/testing'

import { LoadingComponent } from './loading.component'
import { LoadingService } from '../../services'

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

describe('LoadingComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoadingComponent
      ],
      providers: [
        { provide: LoadingService, useClass: MockLoadingService }
    ]
    }).compileComponents()
  }))

  it('should create the loading component', async(() => {
    const fixture = TestBed.createComponent(LoadingComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

})
