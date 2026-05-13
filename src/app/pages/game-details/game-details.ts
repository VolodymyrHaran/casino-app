import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game.model';
import { catchError, Observable, startWith, of, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-game-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './game-details.html',
  styleUrl: './game-details.scss',
})
export class GameDetails {
  vm$!: Observable<{
    game: Game | null;
    loading: boolean;
    errorMessage: string;
  }>;
  gameId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.vm$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));

        return this.gamesService.getGameById(id).pipe(
          map(game => ({
            game,
            loading: false,
            errorMessage: ''
          })),
          startWith({
            game: null,
            loading: true,
            errorMessage: ''
          }),
          catchError(() => of({
            game: null,
            loading: false,
            errorMessage: 'Failed to load game details'
          }))
        );
      })
    );
  }

}
