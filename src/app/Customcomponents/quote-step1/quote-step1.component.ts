import {Glservice} from '../../service/glservice';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {QuoteStep1Service} from '../../service/quote-step1-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Country} from '../../model/country';

@Component({
  selector: 'app-quote-step1',
  templateUrl: './quote-step1.component.html',
  styleUrls: ['./quote-step1.component.scss']
})
export class QuoteStep1Component implements OnInit {
  listApprovalType: any;
  approvalId: any;
  frequencyArray: number[] = [];
  listEquipment: any;
  showEquipement: boolean;
  showFrequency: boolean;
  listFrequency: any;
  listCountries: any;
  isValid = true;
   indx: number;
  listCategories: any;

  constructor(public http: Http, public quoteStep1Service: QuoteStep1Service, public glService: Glservice, private modalService: NgbModal) {

  }

  ngOnInit() {

    this.findCountries();
    this.findFrequencyBand();


    this.quoteStep1Service.findApprovalType()
      .subscribe(data => {
        console.log(' *******success******* ');
        this.listApprovalType = data;
      }, err => {
        console.log(' *******error******* ');
        console.log(err);
      });
  }

  findEquipment() {
  console.log('ok') ;
    this.quoteStep1Service.findEquipementType(this.approvalId)
      .subscribe(data => {

        if (data.length < 1) {
          this.showEquipement = false;
        } else {
          this.listEquipment = data;
          this.showEquipement = true;

          if (this.approvalId === '4') {
            this.showFrequency = true;
          } else {
            this.showFrequency = false;
          }
        }
        this.findCountriesByApproval(this.approvalId);

      }, err => {
        console.log(err);
      });
  }

  findFrequencyBand() {
    this.quoteStep1Service.findFrequencyBand()
      .subscribe(data => {
        this.listFrequency = data;
        console.log(' ******* frequency success******* ');
        console.log(JSON.stringify(this.listFrequency));
      }, err => {

        console.log(' ******* frequency error******* ');
        console.log(err);
      });
  }

  findCountriesByApproval(approvalId: number) {
    this.quoteStep1Service.findCountriesByApprovalType(approvalId)
      .subscribe(data => {
        this.listCountries = data;

        console.log(' ******* country success******* ');
        console.log(JSON.stringify(this.listCountries));

      }, err => {

        console.log(' ******* country error******* ');
        console.log(err);
      });
  }

  findCountries() {
    this.glService.findCountries()
      .subscribe(data => {
        this.listCountries = data;

      }, err => {

        console.log(' ******* country error******* ');
        console.log(err);
      });

  }

  open(content) {
    this.modalService.open(content);
  }


  findCountriesByFrequency(frequencyId: number) {

    this.addToFrequencyArray(frequencyId);

    this.quoteStep1Service.findCountriesByFrequency(this.frequencyArray)
      .subscribe(data => {
        this.listCountries = data;

        console.log(' ******* country success******* ');
        console.log(JSON.stringify(this.listCountries));

      }, err => {

        console.log(' ******* country error******* ');
        console.log(err);
      });
  }

  addToFrequencyArray(frequencyId: number) {

   if ( !(this.frequencyArray.indexOf(frequencyId) > -1) ) {
    this.frequencyArray.push(frequencyId);
  } else {
      this.indx = this.frequencyArray.indexOf(frequencyId);
      this.frequencyArray.splice(this.indx, 1);
   }

}

   findCategories(countryId: number, content) {
      this.quoteStep1Service.findCategories(countryId)
      .subscribe(data => {
       this.listCategories = data;
        this.modalService.open(content);
      } , err => {
         console.log('erreur');
      });
    }

}
