import { Routes } from '@angular/router';
import { BaseLayoutComponent } from "@core/layout/base-layout/base-layout.component";
import {authGuard} from "@core/auth/data-access/services/auth.guard";

const layoutAgnosticComponents = [
  {
    path: 'home',
    loadComponent: () => import('@features/feature-home/home/home.component').then((c) => c.HomeComponent),
  },
];

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'my-servers',
        loadComponent: () => import('@features/feature-servers-catalog/my-servers/my-servers/my-servers.component').then(c => c.MyServersComponent),
      },
      {
        path: 'my-servers/:id',
        loadComponent: () => import('@features/feature-servers-catalog/my-servers/server-detail/server-detail.component').then(c => c.ServerDetailComponent),
      },
      {
        path: 'available-servers',
        loadComponent: () => import('@features/feature-servers-catalog/available-servers/available-servers/available-servers.component').then(c => c.AvailableServersComponent),
      },
      {
        path: 'supports',
        loadComponent: () => import('@features/feature-supports/supports-list-container/supports-list-container.component').then(c => c.SupportsListContainerComponent),
      },
      {
        path: 'supports/test',
        loadComponent: () => import('@features/feature-supports/supports-list-container/supports-list-container.component').then(c => c.SupportsListContainerComponent),
      },
      ...layoutAgnosticComponents,
    ],
  },
  {
    path: 'signup',
    loadComponent: () => import('@features/feature-register/register-container/register-container.component').then(c => c.RegisterContainerComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@features/feature-login/login-container/login-container.component').then(c => c.LoginContainerComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
