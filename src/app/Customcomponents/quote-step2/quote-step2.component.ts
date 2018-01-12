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
  category: any;
  constructor(public project: ProjectService, public glservice: Glservice) {}

  ngOnInit() {
    console.log('Approval ' + this.project.approvalType);
    this.findCategories();
  }

  findCategories() {

    this.project.category.forEach(item => {
this.glservice.findCategory(item)
      .subscribe(data => {
        this.category = data;
        JSON.stringify(this.category);
      });
    });

  }

}
