import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SaveQuotationService } from '../../service/save-quotation.service';
import { QuotationService } from '../../service/quotation.service';

@Component({
  selector: 'app-save-quotation',
  templateUrl: './save-quotation.component.html',
  styleUrls: ['./save-quotation.component.scss']
})
export class SaveQuotationComponent implements OnInit {

  constructor(private saveQuotationService: SaveQuotationService,
    public quotation: QuotationService, private router: Router) { }


  listQuotation: any[];
  ngOnInit() {

    this.getSavedQuotations();
  }


  getSavedQuotations() {

    this.saveQuotationService.getSavedQuotation('saved')
      .subscribe((data: any[]) => {
        if (data.length >= 1) {
          this.listQuotation = data;
        }
      }, err => {
        console.log(' *******error******* ');
        console.log(err);
      });

  }


  goToOrder(q) {


    //get country list 

    // get 
    this.quotation.totalAmount = q.totalAmount;
    alert(JSON.stringify( this.quotation));
    this.router.navigate(['/quoteStep2']);
  }
}
