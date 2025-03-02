import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SharedLoadingComponent } from '@ng-nx/shared-view';

@Component({
  selector: 'app-contained',
  imports: [
    RouterOutlet,
    SharedLoadingComponent,
  ],
  template: `
    <lib-shared-loader />

    <main class="container py-3">
      <router-outlet />
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
