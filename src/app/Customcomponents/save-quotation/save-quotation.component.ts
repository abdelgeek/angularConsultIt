import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveQuotationService } from '../../service/save-quotation.service';
import { QuotationService } from '../../service/quotation.service';
import { Glservice } from '../../service/glservice';

@Component({
  selector: 'app-save-quotation',
  templateUrl: './save-quotation.component.html',
  styleUrls: ['./save-quotation.component.scss']
})
export class SaveQuotationComponent implements OnInit {

  constructor(private glservice: Glservice,
    private saveQuotationService: SaveQuotationService,
    public quotation: QuotationService, private router: Router) { }


  listQuotation: any[];
  ngOnInit() {

    this.getSavedQuotations();
  }


  getSavedQuotations() {
    console.log('value');
    this.saveQuotationService.getSavedQuotation('saved')
      .subscribe((data: QuotationService[]) => {


        if (data.length >= 1) {
          this.listQuotation = data;
        }
        console.log(JSON.stringify(data));
        /* this.listQuotation.forEach(value => {
           console.log(JSON.stringify(value.frequencyBand));
         });*/
      }, err => {
        console.log(' *******error******* ');
        console.log(err);
      });

  }


  goToOrder(q) {

    this.getQuotationService(q);
    this.router.navigate(['/quoteStep2']);
  }


  goToEdit(q) {
    this.getQuotationService(q);
      this.router.navigate(['/quoteStep1']);
  }


  getQuotationService(q) {
    this.quotation.totalAmount = q.totalAmount;
    this.quotation.approvalType = q.approvalType;
    this.quotation.country = q.country;
    this.quotation.dataSheetUrl = q.dataSheetUrl;
    this.quotation.date = q.date;
    this.quotation.equipementNature = q.equipementNature;
    this.quotation.equipementTechnologie = q.equipementTechnologie;
    this.quotation.equipementType = q.equipementType;
    this.quotation.frequencyBand = q.frequencyBand;
    this.quotation.hasEncryptionFeature = q.hasEncryptionFeature;
    this.quotation.id = q.id;
    this.quotation.number = q.number;
    this.quotation.status = q.status;
  }

}
