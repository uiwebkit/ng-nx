import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UserListComponent } from '@ng-nx/uni-users-view';

import { Env } from '../../../environments/env.interface';
import { env } from '../../../environments/environment';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserListComponent],
  template: `
    <lib-user-list [url]="env.users" [pageSizes]="[5, 10, 50, 100, 1000]">
      custom content slot
    </lib-user-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppUsersComponent {

  readonly env: Env = env;
}
