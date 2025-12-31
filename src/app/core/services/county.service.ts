import { Injectable } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { County } from '../../../shared/models/county';
import { Distinct } from '../../../shared/models/distinct';

// const API_BASE_URL = 'https://sparkling-flower-9496.fly.dev/api';
const API_BASE_URL = '/.netlify/functions/proxy';

@Injectable({ providedIn: 'root' })
export class CountyService {
  getCounties(): HttpResourceRef<County[]> {
    const params = {
      path: '/county/counties',
    };

    return httpResource<County[]>(
      () => ({
        url: API_BASE_URL,
        params,
      }),
      {
        defaultValue: [],
      },
    );

    // return httpResource<County[]>(
    //   () => ({
    //     method: 'GET',
    //     url: API_BASE_URL + '/county/counties',
    //     headers: { 'x-api-key': 'Wb1FPDrNMT0RiZkv' },
    //   }),
    //   {
    //     defaultValue: [],
    //   },
    // );
  }

  getDistincts(countyCode: string): HttpResourceRef<Distinct[]> {
    const params = {
      path: `/county/distincts/${countyCode}`,
    };

    return httpResource<Distinct[]>(
      () => ({
        url: API_BASE_URL,
        params,
      }),
      { defaultValue: [] },
    );
  }
}
