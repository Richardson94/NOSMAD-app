import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects/random-roulette',
    pathMatch: 'full',
  },
  {
    path: 'projects/random-roulette',
    loadComponent: () =>
      import('./projects/random-roulette/random-roulette.component').then(
        (m) => m.RandomRouletteComponent
      ),
  },
  { path: '**', redirectTo: 'projects/random-roulette' },
];
