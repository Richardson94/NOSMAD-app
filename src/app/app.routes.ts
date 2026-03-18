import { Routes } from '@angular/router';

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
