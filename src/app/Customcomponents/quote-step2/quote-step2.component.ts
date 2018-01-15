import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {Glservice} from '../../service/glservice';

@Component({
  selector: 'app-quote-step2',
  templateUrl: './quote-step2.component.html',
  styleUrls: ['./quote-step2.component.scss']
})
export class QuoteStep2Component implements OnInit {

 listCategories: any[] = [];
  totalPrice: number;
  constructor(public project: ProjectService, public glservice: Glservice) {}

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

        });
    });

  }

}
