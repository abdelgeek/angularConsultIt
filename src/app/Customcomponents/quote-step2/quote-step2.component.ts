import {Component, OnInit} from '@angular/core';
import {QuotationService} from '../../service/quotation.service';
import {Glservice} from '../../service/glservice';
import {AgencyPriceService} from '../../service/agency-price.service';
import {QuoteStep2Service} from '../../service/quote-step2.service';
import {DatePipe} from '@angular/common';
import {stringify} from 'querystring';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BotDetectCaptchaModule} from 'angular-captcha';
import {EquipementService} from '../../service/equipement.service';
import {PurchaseorderService} from '../../service/purchaseorder.service';
import {PlaceOrder} from '../../service/placeOrder';
import {Http} from '@angular/http';

@Component({
  selector: 'app-quote-step2',
  templateUrl: './quote-step2.component.html',
  styleUrls: ['./quote-step2.component.scss']
})
export class QuoteStep2Component implements OnInit {
  [x: string]: any;

  placeOrder: PlaceOrder;
  modalRef: any;
  listCategories: any[] = [];
  listAgency: any[] = [];
  totalPrice: number;
  approvalId: any;
  constructor(private datePipe: DatePipe, private modal: NgbModal,
    public equipement: EquipementService, private qotation: QuotationService,
    private glservice: Glservice,
    private agencyService: AgencyPriceService, private quoteStep2Service: QuoteStep2Service,
    private router: Router,
    private http: Http,
    private purchaseorderService: PurchaseorderService
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
          this.totalPrice = this.totalPrice + data.categoryPrice;
          this.qotation.amount = this.totalPrice;
          this.quoteStep2Service.findAgency(data.country.id, this.approvalId)
            .subscribe(result => {
              this.listAgency.push(result);
            }, er => {
              console.log(er);
            });

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

  placeOrderfunct() {

    this.modalRef.close();

    const placeOrderDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.qotation.status = 1;
    this.qotation.date = placeOrderDate;


    this.purchaseorderService.placeOrderDate = placeOrderDate;


    alert(JSON.stringify(this.purchaseorderService));

    this.http.post('http://localhost:8084/purchaseOrder', this.purchaseorderService).
      map(resp => resp.json)
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });


    // this.router.navigate(['/quoteStep3']);
  }
}
