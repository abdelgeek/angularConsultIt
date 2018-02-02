import {QuotationService} from './quotation.service';
import {EquipementService} from './equipement.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PlaceOrder {

  quotationModel: QuotationService;
  equipmentModel: EquipementService;
  constructor() {

  }

  placeOrderDate: String;

}
