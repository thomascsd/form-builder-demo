import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BithdayService {
  getYears(): string[] {
    const years: string[] = [];
    const now = new Date();

    for (let year = now.getFullYear() - 20; year > 1900; year--) {
      years.push(year.toString());
    }

    return years;
  }

  getMonth(): string[] {
    const months: string[] = [];

    for (let month = 1; month <= 12; month++) {
      months.push(month.toString());
    }

    return months;
  }
}
