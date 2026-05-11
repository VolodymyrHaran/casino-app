import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Games } from './pages/games/games';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'games', component: Games },
  { path: 'profile', component: Profile },
];