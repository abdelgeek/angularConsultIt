import {Glservice} from '../../service/glservice';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {QuoteStep1Service} from '../../service/quote-step1-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProjectService} from '../../service/project.service';
import {CountryService } from '../../service/country.service';

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
  isCheck: boolean;
  isCheckCountry: boolean;
  index: number;
  categoryId: number;
  hasCat: boolean[] = [];
  oldcat: number[] = [];
  catCountry: number[] = [];
  countryId: number;


  constructor(public project: ProjectService, private router: Router,
    public http: Http, public quoteStep1Service: QuoteStep1Service,
    public glService: Glservice, private modalService: NgbModal,
  public country: CountryService ) {
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

  // = this.project.approvalType;
    this.quoteStep1Service.findEquipementType(this.approvalId)
      .subscribe(data => {

        if (data.length < 1) {
          this.showEquipement = false;
        } else {
          this.listEquipment = data;
          this.showEquipement = true;

          if (this.approvalId === 4) {
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
    alert(' aah ');
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

    if (!(this.frequencyArray.indexOf(frequencyId) > -1)) {
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



        if (this.listCategories.length > 1) {
          this.hasCat[countryId]  = true;
        }
      }, err => {
        console.log('erreur');
      });
  }


  redirectNextStep() {
    this.router.navigate(['/quoteStep2']);
  }

  getEquipementType(equipementTypeid: number, event) {
    this.isCheck = event.target.checked;

    if ((this.isCheck) && (this.project.equipementType.indexOf(equipementTypeid) === -1)) {

      this.project.equipementType.push(equipementTypeid);
    } else {
      this.index = this.project.equipementType.indexOf(equipementTypeid);
      this.project.equipementType.splice(this.index, 1);
    }


  }

  getCountry(countryId: number, event, categorieContent) {

    this.isCheckCountry = event.target.checked;


    if ((this.isCheckCountry) && (this.project.country.indexOf(countryId) === -1)) {
      this.project.country.push(countryId);
      this.findCategories(countryId, categorieContent);
    } else {
      this.index = this.project.country.indexOf(countryId);
      this.project.country.splice(this.index, 1);
      this.hasCat[countryId] = false;
    }


  }

  getfrequencyBandy(frequencyId: number, event) {
    this.isCheck = event.target.checked;

    if ((this.isCheck) && (this.project.frequcenyBand.indexOf(frequencyId) === -1)) {
      this.project.frequcenyBand.push(frequencyId);
    } else {
      this.index = this.project.frequcenyBand.indexOf(frequencyId);
      this.project.frequcenyBand.splice(this.index, 1);
    }

  }

  getCategory(categoryId: number) {


  this.project.category[categoryId] = categoryId;

  this.glService.findCategory(categoryId)
    .subscribe (data => {

   this.countryId = data.country.id ;
    });


    if ((this.project.category.indexOf(this.countryId) !== categoryId)) {
      this.project.category[this.countryId] = categoryId;
    }
alert(' oow ') ;
     alert(JSON.stringify(this.project)) ;
   }

  getApprovalType(aprvlId: number, event) {

    this.approvalId = aprvlId;
    this.project.equipementType = [];
    this.project.country = [];
    this.findEquipment();

  }

  open(categorieContent) {
    this.modalService.open(categorieContent);
  }


}
