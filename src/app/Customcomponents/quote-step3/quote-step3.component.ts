import { Component, OnInit } from '@angular/core';

import { QuoteStep3Service } from '../../service/quote-step3.service';
import { QuotationService } from '../../service/quotation.service';
import { Glservice } from '../../service/glservice';
import { DatePipe } from '@angular/common';
import { Http } from '@angular/http';
import { PurchaseorderService } from '../../service/purchaseorder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-step3',
  templateUrl: './quote-step3.component.html',
  styleUrls: ['./quote-step3.component.scss']
})
export class QuoteStep3Component implements OnInit {

  constructor(private datePipe: DatePipe, private quotation: QuotationService,
    private purchaseorder: PurchaseorderService, private http: Http,
    private router: Router, private quoteStep3Service: QuoteStep3Service
  ) { }
  aggreed: boolean;

  ngOnInit() {
  }



  placeOrderfunct() {

    const placeOrderDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.quotation.status = 1;
    this.quotation.date = placeOrderDate;

    this.purchaseorder.placeOrderDate = placeOrderDate;
    this.quoteStep3Service.placedOrder(this.purchaseorder)
      .subscribe(data => {
        this.router.navigate(['/quoteStep4']);
      }, err => {
        console.log(err);
      });
  }


  getListOfRequirements() {

    this.quotation.country.forEach(item => {
      this.quoteStep3Service.getListOfRequirements(item).
        subscribe((data: any) => {
          alert(JSON.stringify(data));
        }, err => {
          console.log(err);
        });
    });

  }
}
