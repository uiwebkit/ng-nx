import { ChangeDetectionStrategy, Component, effect, inject, input, InputSignal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CalendarStore, MonthNumber, ShortDaysOfWeek, UniCalendarService } from '@ng-nx/common-data';

@Component({
  selector: 'lib-shared-calendar',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    UniCalendarService,
    CalendarStore
  ],
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCalendarComponent {

  year: InputSignal<number> = input(2024);
  month: InputSignal<MonthNumber> = input<MonthNumber>(12);

  private calendarStore = inject(CalendarStore);

  readonly storeYear: Signal<number> = this.calendarStore.year;
  readonly storeMonth: Signal<MonthNumber> = this.calendarStore.month;
  readonly storeDaysOfWeek: Signal<ShortDaysOfWeek> = this.calendarStore.daysOfWeek;
  readonly storeDatesOfMonth: Signal<never[]> = this.calendarStore.datesOfMonth;

  updateYearStore: (year: number) => void = this.calendarStore.updateYear;
  updateMonthStore: (month: MonthNumber) => void = this.calendarStore.updateMonth;

  constructor() {
    // synchronize inputs with store
    effect((): void => this.updateYearStore(this.year()));
    effect((): void => this.updateMonthStore(this.month()));
  }
}
