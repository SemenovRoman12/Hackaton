import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import {API_URL} from "@core/http/api-url.token";
import {environment} from "../environments/environment";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore(),
    provideEffects(),
    provideRouterStore(),
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    }, provideAnimationsAsync()
  ]
};
