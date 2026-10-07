import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { RandomRouletteEffects, randomRouletteFeature } from './projects/random-roulette/state';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./components/welcome/welcome.component').then(
        (m) => m.WelcomeComponent
      ),
  },
  {
    path: 'random-roulette',
    providers: [
      provideState(randomRouletteFeature),
      provideEffects(RandomRouletteEffects),
    ],
    loadComponent: () =>
      import('./projects/random-roulette/random-roulette.component').then(
        (m) => m.RandomRouletteComponent
      ),
  },
  {
    path: 'parking-status',
    loadComponent: () =>
      import('./projects/parking-status/parking-status.component').then(
        (m) => m.ParkingStatusComponent
      ),
  },
  {
    path: 'parking-status-timeline',
    loadComponent: () =>
      import('./projects/parking-status/timeline/parking-timeline.component').then(
        (m) => m.ParkingTimelineComponent
      ),
  },
  {
    path: 'emojipedia',
    loadComponent: () =>
      import('./projects/emojipedia/emojipedia.component').then(
        (m) => m.EmojipediaComponent
      ),
  },
  {
    path: 'fittnes',
    loadComponent: () =>
      import('./projects/fittnes/shell/fittnes-outlet.component').then(
        (m) => m.FittnesOutletComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./projects/fittnes/pages/home/fittnes-home.component').then(
            (m) => m.FittnesHomeComponent
          ),
      },
      {
        path: 'peso',
        loadComponent: () =>
          import('./projects/fittnes/pages/weight/fittnes-weight.component').then(
            (m) => m.FittnesWeightComponent
          ),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./projects/fittnes/pages/profile/fittnes-profile.component').then(
            (m) => m.FittnesProfileComponent
          ),
      },
      {
        path: 'cuerpo',
        loadComponent: () =>
          import('./projects/fittnes/pages/body/fittnes-body.component').then(
            (m) => m.FittnesBodyComponent
          ),
      },
      {
        path: 'cuerpo/:part',
        loadComponent: () =>
          import('./projects/fittnes/pages/measure/fittnes-measure.component').then(
            (m) => m.FittnesMeasureComponent
          ),
      },
    ],
  },
  {
    path: 'quest-dev',
    loadComponent: () =>
      import('./projects/quest-dev/shell/quest-dev-outlet.component').then(
        (m) => m.QuestDevOutletComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./projects/quest-dev/pages/home/quest-dev-home.component').then(
            (m) => m.QuestDevHomeComponent
          ),
      },
      {
        path: ':category/:length',
        loadComponent: () =>
          import('./projects/quest-dev/pages/quiz/quest-dev-quiz.component').then(
            (m) => m.QuestDevQuizComponent
          ),
      },
      {
        path: ':category',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'seller',
    loadComponent: () =>
      import('./projects/seller/seller.component').then((m) => m.SellerComponent),
  },
  {
    path: 'grades-viewer',
    loadComponent: () =>
      import('./projects/grades-viewer/grades-viewer-shell.component').then(
        (m) => m.GradesViewerShellComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./projects/grades-viewer/grades-viewer.component').then(
            (m) => m.GradesViewerComponent
          ),
      },
      {
        path: 'student/:courseKey/:studentId',
        loadComponent: () =>
          import('./projects/grades-viewer/student-detail/student-detail.component').then(
            (m) => m.StudentDetailComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'welcome' },
];
