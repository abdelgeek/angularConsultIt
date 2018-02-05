import {Component, OnInit} from '@angular/core';


import {QuotationService} from '../../service/quotation.service';
import {Glservice} from '../../service/glservice';
import {DatePipe} from '@angular/common';
import {Http} from '@angular/http';
import {PurchaseorderService} from '../../service/purchaseorder.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quote-step3',
  templateUrl: './quote-step3.component.html',
  styleUrls: ['./quote-step3.component.scss']
})
export class QuoteStep3Component implements OnInit {

  constructor(private datePipe: DatePipe, private quotation: QuotationService,
    private purchaseorder: PurchaseorderService, private http: Http,
    private router: Router
  ) {}
  aggreed: boolean;

  ngOnInit() {
  }




  placeOrderfunct() {

    const placeOrderDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.quotation.status = 1;
    this.quotation.date = placeOrderDate;

    this.purchaseorder.placeOrderDate = placeOrderDate;

    alert(JSON.stringify(this.purchaseorder));
    this.http.post('http://localhost:8084/purchaseOrder', this.purchaseorder).
      map(resp => resp.json)
      .subscribe(data => {
       this.router.navigate(['/quoteStep4']);
      }, err => {
        console.log(err);
      });
  }
}
