// Application routes with lazy loading
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadComponent: () =>
      import('./components/intro/intro').then(m => m.Intro),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login').then(m => m.Login),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile-select/profile-select').then(
        m => m.ProfileSelect
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard').then(
        m => m.Dashboard
      ),
  },
  {
    path: '**',
    redirectTo: 'intro',
  },
];