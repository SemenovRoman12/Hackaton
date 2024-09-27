import { Routes } from '@angular/router';
import {authGuard} from "@core/auth/data-access/services/auth.guard";
import {AuthorizedUserLayoutComponent} from "@core/layout/authorized-user-layout/authorized-user-layout.component";

const layoutAgnosticComponents = [
  {
    path: 'home',
    loadComponent: () => import('@features/feature-home/home/home.component').then((c) => c.HomeComponent),
  },
];

export const routes: Routes = [
  {
    path: '',
    component: AuthorizedUserLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'catalog',
        loadComponent: () => import('@features/feature-product-catalog/product-catalog-container/product-catalog-container.component').then(c => c.ProductCatalogContainerComponent)
      },
      ...layoutAgnosticComponents,
    ],
  },
  {
    path: 'guest',
    loadComponent: () => import('@core/layout/unauthorized-user-layout/unauthorized-user-layout.component').then(c => c.UnauthorizedUserLayoutComponent),
    children: [...layoutAgnosticComponents],
  },
  {
    path: 'signup',
    loadComponent: () => import('@features/feature-register/register-container/register-container.component').then(c => c.RegisterContainerComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@features/feature-login/login-container/login-container.component').then(c => c.LoginContainerComponent),
  },
];
