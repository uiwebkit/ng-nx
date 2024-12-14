import { Injectable } from '@angular/core';

import { DayNumber, MonthNumber } from './calendar.model';

@Injectable()
export class UniCalendarService {

  getFirstDayOfWeekIndex(year: number, month: MonthNumber): number {
    return new Date(`${year}/${month}`).getDay();
  }

  getDaysInMonth(year: number, month: MonthNumber): DayNumber {
    return new Date(year, month, 0).getDate() as DayNumber;
  }

  getMonthlyDaysOffset(indexFirstDayOfWeek: number): Array<0> {
    return [...Array(indexFirstDayOfWeek).keys()].map(_ => 0);
  }

  getDaysOfMonth(daysInMonth: number): Array<DayNumber> {
    return [...Array(daysInMonth).keys()].map(i=> i + 1) as Array<DayNumber>;
  }
}
