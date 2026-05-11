import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-card',
  imports: [],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss',
})
export class GameCard {
  @Input() game!: Game;
  @Output() favoriteClicked = new EventEmitter<Game>();
  
  toggleFavorite() {
    this.favoriteClicked.emit(this.game);
  }
}
