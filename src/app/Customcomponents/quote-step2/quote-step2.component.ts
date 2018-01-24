import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {Glservice} from '../../service/glservice';
import {AgencyPriceService} from '../../service/agency-price.service';
import {QuoteStep2Service} from '../../service/quote-step2.service';
import {DatePipe} from '@angular/common';
import {stringify} from 'querystring';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BotDetectCaptchaModule} from 'angular-captcha';

@Component({
  selector: 'app-quote-step2',
  templateUrl: './quote-step2.component.html',
  styleUrls: ['./quote-step2.component.scss']
})
export class QuoteStep2Component implements OnInit {

  modalRef: any;
  listCategories: any[] = [];
  listAgency: any[] = [];
  totalPrice: number;
  approvalId: any;
  constructor(private datePipe: DatePipe, private modal: NgbModal,
    private project: ProjectService, private glservice: Glservice,
    private agencyService: AgencyPriceService, private quoteStep2Service: QuoteStep2Service,
    private router: Router
  ) {}

  ngOnInit() {
    this.totalPrice = 0;
    console.log('Approval ' + this.project.approvalType);
    this.findCategories();
    this.approvalId = this.project.approvalType;
  }


  // retrieve category with price
  findCategories() {

    this.project.category.forEach(item => {

      this.glservice.findCategory(item)
        .subscribe(data => {
          this.listCategories.push(data);
          this.totalPrice = this.totalPrice + data.categoryPrice;

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
  saveQuotation(status) {

    const today = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.project.date = today;
    this.project.status = status;

    this.project.saveQuotation(this.project).
      subscribe(data => {
        this.project = null;
        close();
        this.router.navigate(['/home']);

      }, err => {
        console.log(err);
      });
  }

  openModal(modal) {
    alert('hum');
    this.modalRef.close();
    this.modalRef = this.modal.open(modal, {size: 'sm'});
  }

  close() {

    this.modalRef.close();
  }
}
