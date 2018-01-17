import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export  class QuoteStep1Service {
  constructor(public http: Http ) { }

  findApprovalType() {
    return this.http.get('http://localhost:8084/findApprovalType')
  .map(resp => resp.json());

  }

  findEquipementType(approvalId: number) {
    return this.http.get('http://localhost:8084/findEqmtypeByApprovalType?approvalId=' + approvalId)
      .map(resp => resp.json());
  }

    findEquipementNature(approvalId: number) {

    return this.http.get('http://localhost:8084/findEqmNatureByApprovalType?approvalId=' + approvalId)
      .map(resp => resp.json());
  }

  findFrequencyBand() {
    return this.http.get('http://localhost:8084/findFrequencyBand')
      .map(resp => resp.json());
  }

  findCountriesByApprovalType(approvalId: number) {
    return this.http.get('http://localhost:8084/findCountryByApprovalTypes?approvalId=' + approvalId)
      .map(resp => resp.json());
  }


   findCountriesByFrequency(idFrequency: number) {
    return this.http.get('http://localhost:8084/findCountryfrequency?idFrequency=' + idFrequency)
      .map(resp => resp.json());
  }

  findEquipementTech(eqpmtNatureId: number) {
    return this.http.get('http://localhost:8084/findByEquipementNature?eqpmtNatureId=' + eqpmtNatureId)
      .map(resp => resp.json());
  }
}
