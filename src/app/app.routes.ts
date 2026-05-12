import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Games } from './pages/games/games';
import { Profile } from './pages/profile/profile';
import { GameDetails } from './pages/game-details/game-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'games', component: Games },
  { path: 'games/:id', component: GameDetails },
  { path: 'profile', component: Profile },

];