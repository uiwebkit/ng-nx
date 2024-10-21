import { ChangeDetectionStrategy, Component, inject, input, InputSignal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UniLoadingService } from '@ng-nx/common-data';

@Component({
  selector: 'lib-shared-loader',
  standalone: true,
  imports: [MatProgressBarModule, MatProgressSpinnerModule],
  template: `
    @if (store.isLoading() || loading()) {
      @if (linear()) {
        <mat-progress-bar mode="indeterminate" />
      } @else {
        <div class="lib-loading-shade">
          <mat-spinner />
        </div>
      }
    }
  `,
  styles: [
    `
      .lib-loading-shade {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.15);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedLoadingComponent {
  readonly store = inject(UniLoadingService);

  linear: InputSignal<boolean> = input(false);
  loading: InputSignal<boolean> = input(false);
}
