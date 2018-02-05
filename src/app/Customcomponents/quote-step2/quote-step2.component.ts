import {Component, OnInit} from '@angular/core';
import {Glservice} from '../../service/glservice';
import {AgencyPriceService} from '../../service/agency-price.service';
import {QuoteStep2Service} from '../../service/quote-step2.service';
import {DatePipe} from '@angular/common';
import {stringify} from 'querystring';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BotDetectCaptchaModule} from 'angular-captcha';
import {EquipementService} from '../../service/equipement.service';
import {QuotationService} from '../../service/quotation.service';

import {Http} from '@angular/http';

@Component({
  selector: 'app-quote-step2',
  templateUrl: './quote-step2.component.html',
  styleUrls: ['./quote-step2.component.scss']
})
export class QuoteStep2Component implements OnInit {
  [x: string]: any;

  modalRef: any;
  listCategories: any[] = [];
  listAgency = [];
  totalPrice: number;
  approvalId: any;

  alertEquipmentName = false;
  alertEquipmentModel = false;
  alertEquipmentBrand = false;

  constructor(private datePipe: DatePipe, private modal: NgbModal,
    public equipement: EquipementService, private qotation: QuotationService,
    private glservice: Glservice, private agencyService: AgencyPriceService,
    private quoteStep2Service: QuoteStep2Service, private router: Router,
    private http: Http,
  ) {}

  ngOnInit() {
    this.totalPrice = 0;
    console.log('Approval ' + this.qotation.approvalType);
    this.findCategories();
    this.approvalId = this.qotation.approvalType;
  }


  // retrieve category with price
  findCategories() {

    this.qotation.category.forEach(item => {

      this.glservice.findCategory(item)
        .subscribe(data => {
          this.listCategories.push(data);
          //    this.totalPrice = this.totalPrice + data.categoryPrice;
          this.qotation.totalAmount = this.totalPrice;
          /*    this.quoteStep2Service.findAgency(data.country.id, this.approvalId)
                .subscribe(result => {
                  this.listAgency.push(result);
                }, er => {
                  console.log(er);
                });
    */
        });
    });

  }

  // save the quotation when client click on button save
  saveNotOrderedQuotation(status, modal) {

    this.modalRef.close();
    this.openModal(modal);

    const today = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.qotation.date = today;
    this.qotation.status = status;

    this.glservice.saveQuotation(this.qotation).
      subscribe(data => {
        this.qotation = null;
      }, err => {
        console.log(err);
      });
  }

  openModal(modal) {

    if (this.modalRef != null) {
      this.modalRef.close();
    }
    this.modalRef = this.modal.open(modal, {size: 'sm', backdrop: false, keyboard: false});
  }

  goToHome(modal) {
    this.modalRef.close();
    this.router.navigate(['/home']);
  }

  close() {
    this.modalRef.close();
  }

  redirectHome(modal) {
    this.close();
    this.router.navigate(['/home']);
  }



  checkRequired() {

    if (this.equipement.name == undefined) {
      this.alertEquipmentName = true;
    } else {
      this.alertEquipmentName = false;
    }

    if (this.equipement.brand == undefined) {
      this.alertEquipmentBrand = true;
    } else {
      this.alertEquipmentBrand = false;
    }

    if (this.equipement.model == undefined) {
      this.alertEquipmentModel = true;
    } else {
      this.alertEquipmentModel = false;
    }

  }

  redirectToStep3() {

    this.checkRequired();

    if (this.alertEquipmentName == false && this.alertEquipmentBrand == false
      && this.alertEquipmentModel == false) {
      this.modalRef.close();
      this.router.navigate(['/quoteStep3']);
    }
  }

}
