import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // EXAMPLE
  // { path: 'home', renderMode: RenderMode.Client },
  {
    path: '',
    renderMode: RenderMode.Server,
    status: 301
  },
  {
    path: 'users',
    renderMode: RenderMode.Server,
  },
  {
    path: 'users/:id',
    renderMode: RenderMode.Server,
  },
  // {
  //   path: 'error',
  //   renderMode: RenderMode.Prerender,
  //   status: 404,
  //   headers: {
  //     'Cache-Control': 'no-cache',
  //   },
  // },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
