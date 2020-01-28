import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { County } from '../../../shared/models/county';
import { Distinct } from '../../../shared/models/distinct';

@Injectable({ providedIn: 'root' })
export class CountyService {
  constructor(private httpClient: HttpClient) {}

  getCounties(): Observable<County[]> {
    return this.httpClient.get<County[]>('/api/county');
  }

  getDistincts(countyCode: string): Observable<Distinct[]> {
    const params = { countyCode: countyCode };
    return this.httpClient.get<Distinct[]>('/api/distinct', {
      params: params
    });
  }
}
