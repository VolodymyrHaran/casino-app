import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';
import { GameCard } from '../../components/game-card/game-card';
import { combineLatest, map, startWith, catchError, of, Observable, debounceTime } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-games',
  imports: [CommonModule, GameCard, ReactiveFormsModule],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})


export class Games {
  vm$!: Observable<{
    games: Game[];
    loading: boolean;
    errorMessage: string;
  }>;

  searchControl = new FormControl('');

  constructor(private gamesService: GamesService) {
    const search$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300)
    );
    const games$ = this.gamesService.getGames();

    this.vm$ = combineLatest([games$, search$]).pipe(
      map(([games, search]) => {
        const term = search?.toLowerCase() ?? '';

        return {
          games: games.filter(game =>
            game.name.toLowerCase().includes(term)
          ),
          loading: false,
          errorMessage: ''
        };
      }),
      startWith({
        games: [],
        loading: true,
        errorMessage: ''
      }),
      debounceTime(300),
      catchError(() => of({
        games: [],
        loading: false,
        errorMessage: 'Failed to load games'
      }))
    );
  }

  toggleFavorite(game: Game) {
    this.gamesService.toggleFavourite(game.id);
  }
}
