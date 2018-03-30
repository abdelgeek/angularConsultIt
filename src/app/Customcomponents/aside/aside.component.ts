import { Component, OnInit } from '@angular/core';

import { QuotationService } from '../../service/quotation.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor(public quotation: QuotationService,
    private router: Router) { }

  ngOnInit() {
  }

  goToQuotationstep1() {

    location.href='/quoteStep1';
  }


  gotoSavedQuotation(){
    location.href='/savedQuotation';
  }
}
