import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTileComponent } from './game-tile.component';

describe('GameTileComponent', () => {
  let component: GameTileComponent;
  let fixture: ComponentFixture<GameTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});