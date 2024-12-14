export type ShortDaysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type DayNumber = MonthNumber & (13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31);

export interface CalendarState {
  daysOfWeek: ShortDaysOfWeek;
  year: number;
  month: MonthNumber;
}
