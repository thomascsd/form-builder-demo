import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BithdayService {
  constructor() {}

  getYears(): number[] {
    const years = [];
    const now = new Date();

    for (let year = now.getFullYear() - 20; year > 1900; year--) {
      years.push(year);
    }

    return years;
  }

  getMonth(): number[] {
    const months = [];

    for (let month = 1; month <= 12; month++) {
      months.push(month);
    }

    return months;
  }
}
