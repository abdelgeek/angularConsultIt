import { TestBed, inject } from '@angular/core/testing';

import { QuoteStep2Service } from './quote-step2.service';

describe('QuoteStep2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteStep2Service]
    });
  });

  it('should be created', inject([QuoteStep2Service], (service: QuoteStep2Service) => {
    expect(service).toBeTruthy();
  }));
});
