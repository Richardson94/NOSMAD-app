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
    path: 'routinne',
    loadComponent: () =>
      import('./projects/routinne/shell/routinne-outlet.component').then(
        (m) => m.RoutinneOutletComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./projects/routinne/pages/home/routinne-home.component').then(
            (m) => m.RoutinneHomeComponent
          ),
      },
      {
        path: 'today',
        loadComponent: () =>
          import('./projects/routinne/pages/today/routinne-today.component').then(
            (m) => m.RoutinneTodayComponent
          ),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./projects/routinne/pages/new/routinne-new.component').then(
            (m) => m.RoutinneNewComponent
          ),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./projects/routinne/pages/edit/routinne-edit.component').then(
            (m) => m.RoutinneEditComponent
          ),
      },
      {
        path: 'edit/:routineId',
        loadComponent: () =>
          import('./projects/routinne/pages/edit/routinne-edit.component').then(
            (m) => m.RoutinneEditComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./projects/routinne/pages/reports/routinne-reports.component').then(
            (m) => m.RoutinneReportsComponent
          ),
      },
    ],
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
