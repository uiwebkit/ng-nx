import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

import { CalendarState, DayNumber, MonthNumber } from './calendar.model';
import { UniCalendarService } from './calendar.service';

const initialState: CalendarState = {
  daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  year: 2025,
  month: 12,
};

export const CalendarStore = signalStore(
  withState(initialState),
  withComputed(({ year, month }, calendarService = inject(UniCalendarService)) => ({
    datesOfMonth: computed((): Array<0 & DayNumber> => {
      const firstDayOfWeekIndex: number = calendarService.getFirstDayOfWeekIndex(year(), month());
      const daysInMonth: number = calendarService.getDaysInMonth(year(), month());

      return [
        ...calendarService.getMonthlyDaysOffset(firstDayOfWeekIndex),
        ...calendarService.getDaysOfMonth(daysInMonth)
      ] as Array<0 & DayNumber>;
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
