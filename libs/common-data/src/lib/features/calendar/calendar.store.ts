import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import { CalendarDates, CalendarState, MonthNumber } from './calendar.model';
import { UniCalendarService } from './calendar.service';

const initialState: CalendarState = {
  daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  year: 2024,
  month: 12,
};

export const CalendarStore = signalStore(
  withState(initialState),
  withComputed(({ year, month }, calendarService = inject(UniCalendarService)) => ({
    datesOfMonth: computed((): Array<CalendarDates> => {
      const firstDayOfWeekIndex: number = calendarService.getFirstDayOfWeekIndex(year(), month());
      const daysInMonth: number = calendarService.getDaysInMonth(year(), month());

      return calendarService.getMonthlyDaysOffset(firstDayOfWeekIndex)
        .concat(calendarService.getDaysOfMonth(daysInMonth)) as CalendarDates[];
    }),
  })),
  withMethods(store => ({
    updateYear(year: number): void {
      patchState(store, { year });
    },
    updateMonth(month: MonthNumber): void {
      patchState(store, { month });
    },
  }))
);
