import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {Glservice} from '../../service/glservice';
import {AgencyPriceService} from '../../service/agency-price.service';
import {QuoteStep2Service} from '../../service/quote-step2.service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-quote-step2',
  templateUrl: './quote-step2.component.html',
  styleUrls: ['./quote-step2.component.scss']
})
export class QuoteStep2Component implements OnInit {

  listCategories: any[] = [];
  listAgency: any[] = [];
  totalPrice: number;
  approvalId = 3;
  constructor(public project: ProjectService, public glservice: Glservice,
    public agencyService: AgencyPriceService, public quoteStep2Service: QuoteStep2Service
  ) {}

  ngOnInit() {
    this.totalPrice = 0;
    console.log('Approval ' + this.project.approvalType);
    this.findCategories();

  }

  findCategories() {

    this.project.category.forEach(item => {

      this.glservice.findCategory(item)
        .subscribe(data => {
          this.listCategories.push(data);
          this.totalPrice = this.totalPrice + data.categoryPrice;

          this.quoteStep2Service.findAgency(data.id, this.approvalId)
            .subscribe(result => {
              this.listAgency.push(result);
            }, er => {
              console.log(er);
            });

        });
      this.agencyService.test = 'hum';
    });

  }

}
