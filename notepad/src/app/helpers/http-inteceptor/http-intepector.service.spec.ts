import { TestBed } from '@angular/core/testing';

import { HttpIntepectorService } from './http-intepector.service';

describe('HttpIntepectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntepectorService = TestBed.get(HttpIntepectorService);
    expect(service).toBeTruthy();
  });
});
