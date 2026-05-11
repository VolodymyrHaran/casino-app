import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';
import { OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-games',
  imports: [CommonModule, GameCard],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})


export class Games implements OnInit, OnDestroy {
  games: Game[] = [];
  gamesSubscription?: Subscription;

  constructor(private gamesService: GamesService) {
    
  }

  ngOnInit() {
    this.gamesSubscription = this.gamesService.getGames().subscribe((games) => {
      this.games = games;
    });
  }
  toggleFavorite(game: Game) {
    game.isFavorite = !game.isFavorite;
  }
  ngOnDestroy() {
    this.gamesSubscription?.unsubscribe();
  }
}
