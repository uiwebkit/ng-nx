import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  template: '<a [routerLink]="\'/users\'" class="block">< Back</a>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppUserComponent {}
