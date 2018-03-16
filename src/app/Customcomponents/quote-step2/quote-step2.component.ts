import { Component, OnInit } from '@angular/core';
import { Glservice } from '../../service/glservice';
import { AgencyPriceService } from '../../service/agency-price.service';
import { QuoteStep2Service } from '../../service/quote-step2.service';
import { DatePipe } from '@angular/common';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EquipementService } from '../../service/equipement.service';
import { QuotationService } from '../../service/quotation.service';
import { CurrencyPipe } from '@angular/common';


import { Http } from '@angular/http';
import { Alert } from 'selenium-webdriver';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-quote-step2',
  templateUrl: './quote-step2.component.html',
  styleUrls: ['./quote-step2.component.scss']
})



export class QuoteStep2Component implements OnInit {

  public formModel: FormModel = {};
  [x: string]: any;

  modalRef: any;
  listCategories: any[] = [];
  listAgency = [];
  approvalId: any;

  alertEquipmentName = false;
  alertEquipmentModel = false;
  alertEquipmentBrand = false;
  totalAmount: number;
  today = new Date();
  constructor(private datePipe: DatePipe, private modal: NgbModal,
    public equipement: EquipementService, public qotation: QuotationService,
    private glservice: Glservice, private agencyService: AgencyPriceService,
    private quoteStep2Service: QuoteStep2Service, private router: Router,
    private http: Http,
  ) { }

  ngOnInit() {
    this.findCategories();
    this.approvalId = this.qotation.approvalType;
    this.today.setDate(this.today.getDate() + 30);
    this.totalAmount = 0;
  }


  // retrieve category with price
  findCategories() {
    this.glservice.findCategoryPriceForQuotation(this.qotation).
      subscribe((data: any[]) => {
        this.listCategories = data;

        this.getTotalPrice(data);
      });
  }

  // save the quotation when client click on button save
  saveNotOrderedQuotation(status, modal) {

    //  this.glservice.sendMail('savedQuoteMail.html');


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
    this.modalRef = this.modal.open(modal, { size: 'sm', backdrop: false, keyboard: false });
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

  // check if input is empty
  onBlurEquipmentName() {

    if (this.equipement.name == '') {
      this.alertEquipmentName = true;
    } else {
      this.alertEquipmentName = false;
    }

  }

  // check if input is empty
  onBlurEquipmentBrand() {
    if (this.equipement.brand == '') {
      this.alertEquipmentBrand = true;
    } else {
      this.alertEquipmentBrand = false;
    }

  }

  onBlurEquipmentModel() {
    if (this.equipement.model == '') {
      this.alertEquipmentModel = true;
    } else {
      this.alertEquipmentModel = false;
    }
  }

  // check if input is empty
  getTotalPrice(data: any[]) {
    for (let i = 0; i < data.length; i++) {
      this.totalAmount = this.totalAmount + data[i].price;

    }

    this.qotation.totalAmount = this.totalAmount;
  }

}
