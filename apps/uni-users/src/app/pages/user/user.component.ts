import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SharedCalendarComponent } from '@ng-nx/shared-view';

@Component({
  selector: 'app-user',
  imports: [
    RouterLink,
    SharedCalendarComponent,
  ],
  template: `
    <a [routerLink]="'/users'" class="block">< Back</a>

    <p class="pt-3">Calendar Test</p>

    <lib-shared-calendar [year]="2025" [month]="1" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppUserComponent {
}
