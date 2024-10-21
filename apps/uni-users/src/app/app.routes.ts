import { Route } from '@angular/router';

import { AppComponent } from './containers/app/app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        pathMatch: 'full',
        loadComponent: () => import('./pages/users/users.component').then(m => m.AppUsersComponent),
        title: 'Test - Users Page',
      },
      {
        path: 'users/:id',
        pathMatch: 'full',
        loadComponent: () => import('./pages/user/user.component').then(m => m.AppUserComponent),
        title: 'Test - User Page',
      },
    ],
  },
];
