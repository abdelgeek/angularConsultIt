import { TestBed, inject } from '@angular/core/testing';

import { Glservice } from './glservice';

describe('GlserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Glservice]
    });
  });

  it('should be created', inject([Glservice], (service: Glservice) => {
    expect(service).toBeTruthy();
  }));
});
