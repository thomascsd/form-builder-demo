import { TestBed } from '@angular/core/testing';

import { BithdayService } from './bithday.service';

describe('BithdayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BithdayService = TestBed.inject(BithdayService);
    expect(service).toBeTruthy();
  });
});
