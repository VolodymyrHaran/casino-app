import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  imports: [],
  templateUrl: './game-details.html',
  styleUrl: './game-details.scss',
})
export class GameDetails {
  gameId: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.gameId = this.route.snapshot.paramMap.get('id');
  }
}
