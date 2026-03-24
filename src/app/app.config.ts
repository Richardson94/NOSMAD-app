import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHotToastConfig } from '@ngneat/hot-toast';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    provideHotToastConfig({
      position: 'bottom-center',
      duration: 2200,
      theme: 'toast',
      success: {
        style: {
          background: 'rgba(24, 24, 27, 0.96)',
          color: '#e4e4e7',
          border: '1px solid rgba(167, 139, 250, 0.35)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)',
        },
        iconTheme: {
          primary: '#a78bfa',
          secondary: '#18181b',
        },
      },
    }),
  ],
};
