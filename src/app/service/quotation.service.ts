import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class QuotationService {

  name: string;
  model: string;
  brand: string;
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

  constructor() {

    this.country = [];
    this.category = [];
    this.equipementTechnologie = [];
    this.frequencyBand = [];
  }

}
