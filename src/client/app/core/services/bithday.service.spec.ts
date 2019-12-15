import { TestBed } from '@angular/core/testing';

import { BithdayService } from './bithday.service';

describe('BithdayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BithdayService = TestBed.get(BithdayService);
    expect(service).toBeTruthy();
  });
});
