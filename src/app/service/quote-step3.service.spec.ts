import { TestBed, inject } from '@angular/core/testing';

import { QuoteStep3Service } from './quote-step3.service';

describe('QuoteStep3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteStep3Service]
    });
  });

  it('should be created', inject([QuoteStep3Service], (service: QuoteStep3Service) => {
    expect(service).toBeTruthy();
  }));
});
