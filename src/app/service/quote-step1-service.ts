import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuoteStep1Service {
  constructor(public http: HttpClient) {}

  findApprovalType() {
    return this.http.get('/api/findApprovalType');
  }

  findEquipmentType() {
    return this.http.get('/api/findEquipementTypes');
  }

  findEquipementType(approvalId: number) {
    return this.http.get('/api/findEqmtypeByApprovalType?approvalId=' + approvalId);

  }

  findEquipementNature(approvalId: number) {

    return this.http.get('/api/findEqmNatureByApprovalType?approvalId=' + approvalId);

  }

  findFrequencyBand() {
    return this.http.get('/api/findFrequencyBand');
  }

  findCountriesByApprovalType(approvalId: number) {
    return this.http.get('api/findCountryByApprovalTypes?approvalId=' + approvalId);
  }

  findCountriesByEquipmentNature(approvalId: number) {
    return this.http.get('api/findCountryByApprovalTypes?approvalId=' + approvalId);
  }


  findFrequenciesByCountry(countryId: number) {
    return this.http.get('/api/findFrequenciesCountry?countryId=' + countryId);
  }

  findEquipementTech(eqpmtNatureId: number) {
    return this.http.get('/api/findByEquipementNature?eqpmtNatureId=' + eqpmtNatureId);

  }
}
