import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class QuoteStep2Service {

  constructor( public htpp: Http) { }

 findCountries(approvalId: number) {
    return this.htpp.get('http://localhost:8080/findCountryByEquipementTypes?equipementId=' + approvalId)
      .map(resp => resp.json()) ;
  }

  findAgency(countryId: number, approvalTypeId: number) {
    return this.htpp.get('http://localhost:8084/findByCountryAndApprovalType?countryId=' + countryId +
       '&approvalTypeId=' + approvalTypeId )
    .map(resp => resp.json());
  }

}
