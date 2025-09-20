import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { County } from '../../../shared/models/county';
import { Distinct } from '../../../shared/models/distinct';

@Injectable({ providedIn: 'root' })
export class CountyService {
  constructor() {}

  getCounties(): HttpResourceRef<County[]> {
    return httpResource<County[]>('/.netlify/functions/county', { defaultValue: [] });
  }

  getDistincts(countyCode: string): HttpResourceRef<Distinct[]> {
    const params = { countyCode: countyCode };

    return httpResource<Distinct[]>(
      () => ({
        url: '/.netlify/functions/distinct',
        params: params,
      }),
      { defaultValue: [] },
    );
  }
}
