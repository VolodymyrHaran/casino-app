import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PhotoApiResponse } from '../models/photo-api-response.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  constructor(private http: HttpClient) {
  }

  getGames(): Observable<Game[]> {
    const input = this.http.get<PhotoApiResponse[]>('https://jsonplaceholder.typicode.com/photos?_limit=10');
    return input.pipe(
      map((games) => {
        return games.map((game) => this.transformResponse(game));
      })
    );
  }

  private transformResponse(game: PhotoApiResponse): Game {
    return {
            id: game.id,
            name: game.title,
            provider: 'Provider ' + game.albumId,
            image: game.thumbnailUrl,
            rating: Math.floor(Math.random() * 5) + 1,
            isFavorite: false,
          };
  }
}
