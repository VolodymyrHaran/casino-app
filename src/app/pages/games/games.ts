import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-games',
  imports: [CommonModule, GameCard],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})


export class Games{
  games$;
  
  constructor(private gamesService: GamesService) {
    this.games$ = this.gamesService.getGames();
  }
  
  toggleFavorite(game: Game) {
    game.isFavorite = !game.isFavorite;
  }
}
