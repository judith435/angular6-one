import { TestBed } from '@angular/core/testing';

import { CalcPrivateService } from './calc-private.service';

describe('CalcPrivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcPrivateService = TestBed.get(CalcPrivateService);
    expect(service).toBeTruthy();
  });
});
