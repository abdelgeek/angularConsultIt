import { TestBed, inject } from '@angular/core/testing';

import { SaveQuotationService } from './save-quotation.service';

describe('SaveQuotationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveQuotationService]
    });
  });

  it('should be created', inject([SaveQuotationService], (service: SaveQuotationService) => {
    expect(service).toBeTruthy();
  }));
});
