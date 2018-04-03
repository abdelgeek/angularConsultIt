import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class QuotationService {


  description: string;
  approvalType: number;
  equipementType: number;
  equipementNature: number;
  frequencyBand: number[];
  equipementTechnologie: number[];
  country: number[];
  category: number[];
  hasEncryptionFeature: boolean;
  dataSheetUrl: string;
  status: number;
  date: any;
  totalAmount: number;
  number: number;
  id: number;
state: boolean;

  constructor() {
    this.totalAmount = 0;
    this.country = [];
    this.category = [];
    this.equipementTechnologie = [];
    this.frequencyBand = [];
  }

}
