import { TestBed, inject } from '@angular/core/testing';

import { GlserviceService } from './glservice.service';

describe('GlserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlserviceService]
    });
  });

  it('should be created', inject([GlserviceService], (service: GlserviceService) => {
    expect(service).toBeTruthy();
  }));
});
