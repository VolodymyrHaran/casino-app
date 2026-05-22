import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { GameCard } from './game-card';

describe('GameCard', () => {
  let component: GameCard;
  let fixture: ComponentFixture<GameCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCard);
    component = fixture.componentInstance;
    component.game = {
      id: 1,
      name: 'Test Game',
      provider: 'Test Provider',
      image: 'test-image.jpg',
      rating: 4.5,
      isFavorite: false,
    };
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
