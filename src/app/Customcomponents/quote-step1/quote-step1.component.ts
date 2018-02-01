import {Glservice} from '../../service/glservice';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {QuoteStep1Service} from '../../service/quote-step1-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProjectService} from '../../service/project.service';
import {CountryService} from '../../service/country.service';
import {DatePipe} from '@angular/common';


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
  listCountries: any[] = [];
  listCountriesFrequency: any[] = [];
  listEquipementType: any;

  listCategories: any;

  file: File;
  countryId: number;
  categoryName: string[] = [];

  checkCountry: boolean[] = [];
  disabledCountry: boolean[] = [];

  modalRef: any;
  modalRef2: any;
  messageError: string;

  hasCat: number[] = [];

  natureId: any;

  alertapproval = false;
  alertequipmentType = false;
  alertencryption = false;
  alertequipmentNature = false;
  alertFrequency = false;
  alertCountry = false;
  alertEquipementTechnologie = false;


  constructor(public project: ProjectService, private router: Router,
    public quoteStep1Service: QuoteStep1Service,
    public glService: Glservice, private modalService: NgbModal,
    public country: CountryService, private datePipe: DatePipe
  ) {
  }

  ngOnInit() {

    this.findEquipmentType();
    this.findCountries();

    this.findFrequencyBand();
    this.findApprovalType();

  }


  // init disabled
  initDisabledCountry() {

    this.listCountries.forEach((item, index) => {
      this.disabledCountry[item.id] = false;
    });
  }



  findApprovalType() {
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

    this.quoteStep1Service.findEquipementNature(this.project.approvalType)
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
      }, err => {
        console.log(err);
      });
  }


  // get from data base equipment type list
  findEquipmentType() {

    this.quoteStep1Service.findEquipmentType()
      .subscribe(data => {
        this.listEquipementType = data;
      }, err => {
        console.log(err);
      });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
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
        // this.findCountriesByApproval(this.approvalId);

      }, err => {
        console.log(err);
      });
  }

  // get from data base frequency band list
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

  // get from data base list
  findCountriesByApproval(approvalId) {


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
        this.initDisabledCountry();
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

        this.project.category[countryId] = this.listCategories[0].id;


        /*
           this.hasCat[countryId] = this.listCategories.length;
           if (this.listCategories.length > 1) {
             this.modalRef = this.modalService.open(categorieContent, {size: 'lg', backdrop: false, keyboard: false});
           } else if (this.listCategories.length = 1) {

             this.project.category[countryId] = this.listCategories[0].id;
           }
         }, err => {
           console.log('erreur');
         }
            */
      });
  }


  redirectNextStep(confirmContent) {
    if (this.file == null) {
      this.checkRequired();
      if (this.alertapproval == false && this.alertCountry == false &&
        this.alertencryption == false && this.alertEquipementTechnologie == false
        && this.alertequipmentNature == false && this.alertequipmentType == false
        && this.alertFrequency == false) {
        this.router.navigate(['/quoteStep2']);
      }


    } else {
      this.modalRef = this.modalService.open(confirmContent, {size: 'sm', backdrop: false, keyboard: false});
    }

  }


  checkRequired() {
    if (this.project.approvalType === undefined) {
      this.alertapproval = true;
    } else {
      this.alertapproval = false;

    }

    if (this.project.equipementType === undefined) {
      this.alertequipmentType = true;
    } else {
      this.alertequipmentType = false;

    }


    if (this.project.hasEncryptionFeature === undefined) {

      this.alertencryption = true;
    } else {
      this.alertencryption = false;

    }

    if (this.showEquipementNature == true && this.project.equipementNature == undefined) {
      this.alertequipmentNature = true;
    } else {
      this.alertequipmentNature = false;

    }

    if (this.showFrequency == true && this.project.frequencyBand.length == 0) {
      this.alertFrequency = true;
    } else {
      this.alertFrequency = false;

    }



    if (this.project.equipementTechnologie.length == 0 && this.showEquipementTech == true) {
      this.alertEquipementTechnologie = true;
    } else {
      this.alertEquipementTechnologie = false;

    }

    if (this.project.country.length == 0) {
      this.alertCountry = true;
    } else {
      this.alertCountry = false;

    }


  }

  goToStep2() {
    this.modalRef.close();
    this.router.navigate(['/quoteStep2']);

  }

  goToHome(modal) {
    this.modalRef.close();
    this.router.navigate(['/home']);
  }
  // afficher la liste des pays et retourner les categories par pays
  getCountry(countryId: number, isCheckCountry: boolean, categorieContent) {

    // this.checkCountry[countryId] = !isCheckCountry;
    if (isCheckCountry) {
      this.findCategories(countryId, categorieContent);
      this.project.country.push(countryId);
    } else {

      const index = this.project.country.indexOf(countryId);
      this.project.country.splice(index, 1);
      this.project.category[countryId] = null;

    }

  }

  // affect frequency band to object project
  getfrequencyBand(frequencyId: number, event) {

    const isCheck = event.target.checked;

    if ((isCheck) && (this.project.frequencyBand.indexOf(frequencyId) === -1)) {
      this.project.frequencyBand.push(frequencyId);
    } else {
      const index = this.project.frequencyBand.indexOf(frequencyId);
      this.project.frequencyBand.splice(index, 1);

    }

    this.checkFrequencyCountry(this.project.frequencyBand);
  }


  // affect frequency band to object project
  getEquipemenetTechnology(technologyId: number, event) {

    const isCheck = event.target.checked;

    if ((isCheck) && (this.project.equipementTechnologie.indexOf(technologyId) === -1)) {
      this.project.equipementTechnologie.push(technologyId);
    } else {
      const index = this.project.equipementTechnologie.indexOf(technologyId);
      this.project.equipementTechnologie.splice(index, 1);
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
    this.project.frequencyBand = [];
    this.project.equipementTechnologie = [];

    this.natureId = this.project.equipementNature;
    if (this.natureId === '2') {
      this.showFrequency = true;

    } else {
      this.showFrequency = false;
    }

  }

  // affect approval type to object project
  getApprovalType() {
    // this.approvalId = aprvlId;
    this.project.country = [];
    this.checkCountry = [];
    this.project.equipementTechnologie = [];
    this.project.equipementNature = null;
    this.project.frequencyBand = [];

    // find from database equipment nature
    this.findEquipmentNature();
    // find from database country of that approval

    this.findCountriesByApproval(this.project.approvalType);
  }

  // open modal category
  open(countryId: number, categorieContent) {
    this.countryId = countryId;
    this.findCategories(countryId, categorieContent);

  }

  close() {
    this.modalRef.close();
    this.checkCountry[this.countryId] = false;
  }


  // check if an agency approval a frequency
  checkFrequencyCountry(idFrequency: number[]) {

    this.listCountries.forEach(item => {
      this.disabledCountry[item.id] = false;
      this.quoteStep1Service.findFrequenciesByCountry(item.id)
        .subscribe(data => {

          let listFrequenciesCountry: any[] = [];
          listFrequenciesCountry = data;

          let idFreq: any[] = [];

          listFrequenciesCountry.forEach(itemfc => {
            idFreq.push(itemfc.id);
          });

          idFrequency.forEach(idFrequen => {
            if (idFreq.indexOf(idFrequen) === - 1) {
              this.disabledCountry[item.id] = true;
            }
          });

        });
    });

  }



  // save quotation
  saveQuotation(status, modalContent) {

    this.modalRef.close();
    this.modalRef = this.modalService.open(modalContent, {size: 'sm', backdrop: false, keyboard: false});
    const today = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.project.date = today;
    this.project.status = status;

    this.project.saveQuotation(this.project).
      subscribe(data => {
        this.project = null;
      }, err => {
        console.log(err);
      });
  }

}

