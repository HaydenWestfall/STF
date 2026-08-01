import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Hydration already blocks the initial navigation, so
    // withEnabledBlockingInitialNavigation() must not be added here.
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
  ],
};
