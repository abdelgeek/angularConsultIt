import {Glservice} from '../../service/glservice';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {QuoteStep1Service} from '../../service/quote-step1-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProjectService} from '../../service/project.service';
import {CountryService} from '../../service/country.service';

@Component({
  selector: 'app-quote-step1',
  templateUrl: './quote-step1.component.html',
  styleUrls: ['./quote-step1.component.scss']
})
export class QuoteStep1Component implements OnInit {
  listApprovalType: any;
  approvalId: any;
  frequencyArray: number[] = [];
  listTechnologie: any;
  listEquipmentNature: any;
  showEquipementNature: boolean;
  showEquipementTech: boolean;
  showFrequency: boolean;
  listFrequency: any;
  listCountries: any;

  listCategories: any;


  countryId: number;
  categoryName: string[] = [];

  checkCountry: boolean[] = [];

  modalRef: any;
  messageError: string;

  hasCat: number[] = [];

  natureId: any;

  alertname = false;
  alertbrand = false;
  alertmodel = false;
  alertdescription = false;
  alertapproval = false;
  alertequipement = false;
  alertfrequency = false;
  alertcountry = false;
  alertcategory = false;

  constructor(public project: ProjectService, private router: Router,
    public http: Http, public quoteStep1Service: QuoteStep1Service,
    public glService: Glservice, private modalService: NgbModal,
    public country: CountryService,
  ) {
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


  // get from data base equipment nature list
  findEquipmentNature() {

    this.quoteStep1Service.findEquipementNature(this.approvalId)
      .subscribe(data => {

        if (data.length < 1) {

          // if equipment list < 1 hide frequency and technology

          this.showEquipementNature = false;
          this.showFrequency = false;
          this.showEquipementTech = false;
          this.natureId = null;

        } else {

          this.listEquipmentNature = data;
          this.showEquipementNature = true;

        }
        this.findCountriesByApproval(this.approvalId);

      }, err => {
        console.log(err);
      });
  }


  // get technologie from database

  findTechnologie() {
 this.natureId = this.project.equipementNature;
   
    this.quoteStep1Service.findEquipementTech(this.natureId)
      .subscribe(data => {
        if (data.length < 1) {
          this.showEquipementTech = false;
        } else {
          this.listTechnologie = data;
          this.showEquipementTech = true;

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
      const indx = this.frequencyArray.indexOf(frequencyId);
      this.frequencyArray.splice(indx, 1);
    }

  }

  findCategories(countryId: number, categorieContent) {

    this.glService.findCategories(countryId)
      .subscribe(data => {
        this.listCategories = data;
        this.hasCat[countryId] = this.listCategories.length ;
        if (this.listCategories.length > 1) {
          this.modalRef = this.modalService.open(categorieContent, {size: 'lg', backdrop: false, keyboard: false});
        } else if (this.listCategories.length = 1) {


          this.project.category[countryId] = this.listCategories[0].id;
        }
      }, err => {
        console.log('erreur');
      });
  }


  redirectNextStep() {

    this.router.navigate(['/quoteStep2']);
  }



  // afficher la liste des pays et retourner les categories par pays
  getCountry(countryId: number, event, categorieContent) {


    const isCheckCountry = event.target.checked;
    this.checkCountry[countryId] = isCheckCountry;
    if (isCheckCountry) {
      this.findCategories(countryId, categorieContent);
      this.project.country.push(countryId);
    } else {

      const index = this.project.country.indexOf(countryId);
      this.project.country[index] = null;
      this.project.category[countryId] = null;

    }

  }

  // affect frequency band to object project
  getfrequencyBand(frequencyId: number, event) {

    const isCheck = event.target.checked;

    if ((isCheck) && (this.project.frequcenyBand.indexOf(frequencyId) === -1)) {
      this.project.frequcenyBand.push(frequencyId);
    } else {
      const index = this.project.frequcenyBand.indexOf(frequencyId);
      this.project.frequcenyBand[index] = null;


    }

  }

  // affect category to object project
  getCategory() {
    const categoryId = this.project.category[this.countryId];
    this.glService.findCategory(categoryId)
      .subscribe(data => {
        const cat = data;
        this.categoryName[this.countryId] = cat.categoryName;
        this.modalRef.close();
      }, err => {
        console.log(err);
      });

  }

  setCategory(id: number) {
    this.countryId = id;
  }

  getEquipementNature() {

    this.findTechnologie();

    this.natureId = this.project.equipementNature;
    if (this.natureId === '2') {
      this.showFrequency = true;

    } else {
      this.showFrequency = false;
    }

  }


  // affect approval type to object project
  getApprovalType(aprvlId: number) {

    this.approvalId = aprvlId;
    this.project.equipementNature = [];
    this.project.country = [];

    // find from database equipment nature
    this.findEquipmentNature();
    // find from database country of that approval
    this.findCountriesByApproval(aprvlId);
  }

  // open modal
  open(countryId: number, categorieContent) {
    this.countryId = countryId;
    this.findCategories(countryId, categorieContent);

  }

  close() {
    this.modalRef.close();
this.checkCountry[ this.countryId] = false;
  }


  // check if input name is set
  onNameBlurMethod(v: any) {
    if (v) {
      this.alertname = false;
    } else {
      this.alertname = true;
    }
  }

  // check if input model is set
  onModelBlurMethod(v: any) {
    if (v) {
      this.alertmodel = false;
    } else {
      this.alertmodel = true;
    }
  }

  // check if input brand is set
  onBrandlBlurMethod(v: any) {
    if (v) {
      this.alertbrand = false;
    } else {
      this.alertbrand = true;
    }
  }

  // check if input description is set
  onDescriptionBlurMethod(v: any) {
    if (!v || v.length > 500) {
      this.alertdescription = true;
    } else {
      this.alertdescription = false;
    }
  }
}


