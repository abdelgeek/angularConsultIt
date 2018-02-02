import {EquipementService} from './equipement.service';
import {Injectable} from '@angular/core';
import {PlaceOrder} from './placeOrder';
import {QuotationService} from './quotation.service';


@Injectable()
export class PurchaseorderService {

  constructor(private quotationModel: QuotationService, private equipmentModel: EquipementService) {}

  placeOrderDate: String;
}
