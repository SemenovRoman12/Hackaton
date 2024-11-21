import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideRouterStore } from '@ngrx/router-store';
import {API_URL} from "@core/http/api-url.token";
import {environment} from "../environments/environment";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {tokenInterceptor} from "@core/auth/data-access/services/token.interceptor";
import { authFeature } from "@core/auth/data-access/+state/auth.reducer";
import * as authEffect from "@core/auth/data-access/+state/auth.effects";
import * as catalogEffect from "@features/feature-product-catalog/data-access/+state/catalog.effects";
import {catalogFeature} from "@features/feature-product-catalog/data-access/+state/catalog.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideRouter(routes),
    provideStore({
      [authFeature.name]: authFeature.reducer,
      [catalogFeature.name]: catalogFeature.reducer,
    }),
    provideEffects(
      authEffect,
      catalogEffect,
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideRouterStore(),
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    },
    provideAnimationsAsync(), provideAnimationsAsync(),
  ]
};
