import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PhotoApiResponse } from '../models/photo-api-response.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  private favouriteIdsSubject = new BehaviorSubject<number[]>([]);
  favouriteIds$ = this.favouriteIdsSubject.asObservable();

  constructor(private http: HttpClient) {

  }

  getGames(): Observable<Game[]> {
    const gamesFromApi$ = this.http.get<PhotoApiResponse[]>('https://jsonplaceholder.typicode.com/photos?_limit=10').pipe(
      map(games => games.map(game => this.transformResponse(game)))
    );
    return combineLatest([gamesFromApi$, this.favouriteIds$]).pipe(
      map(([games, favouriteIds]) => {
        return games.map(game => ({
          ...game,
          isFavorite: favouriteIds.includes(game.id)
        }));
      })
    );
  }

  private transformResponse(game: PhotoApiResponse): Game {
    return {
      id: game.id,
      name: game.title,
      provider: 'Provider ' + game.albumId,
      image: game.thumbnailUrl,
      rating: 3 + (game.id % 20) / 10,
      isFavorite: false,
    };
  }

  getGameById(id: number): Observable<Game> {
    const input = this.http.get<PhotoApiResponse>('https://jsonplaceholder.typicode.com/photos/' + id);
    return input.pipe(
      map(game => this.transformResponse(game))
    );
  }

  toggleFavourite(gameId: number) {
    const currentIds = this.favouriteIdsSubject.value;

    if (currentIds.includes(gameId)) {
      this.favouriteIdsSubject.next(
        currentIds.filter(id => id !== gameId)
      );
    } else {
      this.favouriteIdsSubject.next([
        ...currentIds,
        gameId
      ]);
    }
  }
}
