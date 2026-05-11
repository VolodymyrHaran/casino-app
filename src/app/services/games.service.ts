import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  games: Game[] = [
    {
      name: 'Book of Dead',
      provider: 'Play’n GO',
      image: 'https://placehold.co/200x120',
      rating: 4.5,
      isFavorite: false
    },
    {
      name: 'Sweet Bonanza',
      provider: 'Pragmatic Play',
      image: 'https://placehold.co/200x120',
      rating: 4.2,
      isFavorite: false
    },
    {
      name: 'Gates of Olympus',
      provider: 'Pragmatic Play',
      image: 'https://placehold.co/200x120',
      rating: 4.0,
      isFavorite: false
    }
  ];
  getGames() : Observable<Game[]> {
    return of(this.games);
  }
}
