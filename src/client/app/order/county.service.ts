import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { County } from '../../../shared/models/county';
import { Distinct } from '../../../shared/models/distinct';

@Injectable({ providedIn: 'root' })
export class CountyService {
  constructor() {}

  getCounties(): HttpResourceRef<County[]> {
    const params = {
      path: '/county/counties',
    };

    return httpResource<County[]>(
      () => ({
        url: '/.netlify/functions/proxy',
        params,
      }),
      {
        defaultValue: [],
      },
    );
  }

  getDistincts(countyCode: string): HttpResourceRef<Distinct[]> {
    const params = {
      path: 'county/distincts',
      countyCode: countyCode,
    };

    return httpResource<Distinct[]>(
      () => ({
        url: '/.netlify/functions/proxy',
        params,
      }),
      { defaultValue: [] },
    );
  }
}
