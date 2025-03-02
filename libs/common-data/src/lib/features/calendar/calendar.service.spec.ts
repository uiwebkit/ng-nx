import { TestBed } from '@angular/core/testing';

import { UniCalendarService } from './calendar.service';

describe('UniCalendarService', () => {
  let service: UniCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniCalendarService]
    });
    service = TestBed.inject(UniCalendarService);
  });

  describe('getFirstDayOfWeekIndex', () => {
    it('should return the correct day index for the first day of the month', () => {
      // Example test case (result depends on local timezone)
      const year = 2023;
      const month = 9; // September
      const expected = new Date(`${year}/${month}/1`).getDay();

      expect(service.getFirstDayOfWeekIndex(year, month)).toBe(expected);
    });
  });

  describe('getDaysInMonth', () => {
    it('should return 31 days for January 2023', () => {
      expect(service.getDaysInMonth(2023, 1)).toBe(31);
    });

    it('should return 28 days for February 2023', () => {
      expect(service.getDaysInMonth(2023, 2)).toBe(28);
    });

    it('should return 29 days for February 2020 (leap year)', () => {
      expect(service.getDaysInMonth(2020, 2)).toBe(29);
    });

    it('should return 30 days for April 2023', () => {
      expect(service.getDaysInMonth(2023, 4)).toBe(30);
    });
  });

  describe('getMonthlyDaysOffset', () => {
    it('should return an array of zeros with length equal to indexFirstDayOfWeek', () => {
      expect(service.getMonthlyDaysOffset(3)).toEqual([0, 0, 0]);
      expect(service.getMonthlyDaysOffset(0)).toEqual([]);
      expect(service.getMonthlyDaysOffset(5).length).toBe(5);
    });

    it('should return all zeros in the array', () => {
      const result: 0[] = service.getMonthlyDaysOffset(4);

      expect(result.every(item => item === 0)).toEqual(true);
    });
  });

  describe('getDaysOfMonth', () => {
    it('should return an array of numbers from 1 to daysInMonth', () => {
      expect(service.getDaysOfMonth(5)).toEqual([1, 2, 3, 4, 5]);
      expect(service.getDaysOfMonth(1)).toEqual([1]);
    });

    it('should handle 31 days correctly', () => {
      const result = service.getDaysOfMonth(31);

      expect(result.length).toBe(31);
      expect(result[0]).toBe(1);
      expect(result[30]).toBe(31);
    });
  });
});
