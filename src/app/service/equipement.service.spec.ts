import { TestBed, inject } from '@angular/core/testing';

import { EquipementService } from './equipement.service';

describe('EquipementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipementService]
    });
  });

  it('should be created', inject([EquipementService], (service: EquipementService) => {
    expect(service).toBeTruthy();
  }));
});
