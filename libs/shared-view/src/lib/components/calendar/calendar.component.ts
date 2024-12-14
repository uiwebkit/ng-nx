import { ChangeDetectionStrategy, Component, effect, inject, input, InputSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CalendarStore, MonthNumber, UniCalendarService } from '@ng-nx/common-data';

@Component({
  selector: 'lib-shared-calendar',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  providers: [UniCalendarService, CalendarStore],
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCalendarComponent {

  year: InputSignal<number> = input(2024);
  month: InputSignal<MonthNumber> = input<MonthNumber>(2);

  readonly calendarStore = inject(CalendarStore);

  constructor() {
    effect((): void => this.calendarStore.updateYear(this.year()), { allowSignalWrites: true });
    effect((): void => this.calendarStore.updateMonth(this.month()), { allowSignalWrites: true });
  }
}
