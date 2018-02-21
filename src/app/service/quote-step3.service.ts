import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class QuoteStep3Service {

  constructor(private http: HttpClient) {}

  public placedOrder(purchaseorder) {
    return this.http.post('/api/purchaseOrder', purchaseorder);
  }
}

