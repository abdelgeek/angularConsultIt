import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuoteStep2Service {

  constructor(public htpp: HttpClient) {}

  findCountries(approvalId: number) {
    return this.htpp.get('/api/findCountryByEquipementTypes?equipementId=' + approvalId);

  }

  findAgency(countryId: number, approvalTypeId: number) {
    return this.htpp.get('/api/findByCountryAndApprovalType?countryId=' + countryId +
      '&approvalTypeId=' + approvalTypeId);

  }

}
