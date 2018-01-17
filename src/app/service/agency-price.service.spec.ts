import { TestBed, inject } from '@angular/core/testing';

import { AgencyPriceService } from './agency-price.service';

describe('AgencyPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgencyPriceService]
    });
  });

  it('should be created', inject([AgencyPriceService], (service: AgencyPriceService) => {
    expect(service).toBeTruthy();
  }));
});
