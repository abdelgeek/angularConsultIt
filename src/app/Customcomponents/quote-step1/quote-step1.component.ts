import { Result } from '../../Model/result';
import { Glservice } from '../../service/glservice';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { QuoteStep1Service } from '../../service/quote-step1-service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QuotationService } from '../../service/quotation.service';
import { CountryService } from '../../service/country.service';
import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quote-step1',
  templateUrl: './quote-step1.component.html',
  styleUrls: ['./quote-step1.component.scss']
})

export class QuoteStep1Component implements OnInit {

  listApprovalType: any;
  // approvalId: any;
  frequencyArray: number[] = [];
  listTechnologie: any[] = [];
  listEquipmentNature: any[] = [];
  showEquipementNature: boolean;
  showEquipementTech: boolean;
  showFrequency: boolean;
  listFrequency: any[] = [];
  listCountries: any[] = [];
  listCountriesFrequency: any[] = [];
  listEquipementType: any;
  currentFileUpload: FileList;

  listCategories: any;
  messageResult: any[] = [];
  messageString: any[] = [];
  file: File;
  countryId: number;
  categoryName: string[] = [];

  checkCountry: boolean[] = [];
  checkTech: boolean[] = [];
  checkFrequency: boolean[] = [];

  disabledCountry: boolean[] = [];

  modalRef;
  modalRef2: any;
  messageError: string;


  natureId: any;

  alertapproval = false;
  alertequipmentType = false;
  alertencryption = false;
  alertequipmentNature = false;
  alertFrequency = false;
  alertCountry = false;
  alertEquipementTechnologie = false;

  oldCountry: number[] = [];
  oldApprovalType: number;
  oldEquipementType: number;
  oldEquipementNature: number;
  oldFrequencyBand: number[] = [];
  oldEquipementTechnologie: number[] = [];
  oldHasEncryptionFeature: boolean;



  countryHasChanged: Boolean = false;
  approvalTypeHasChanged: Boolean = false;
  equipementTypeHasChanged: Boolean = false;
  equipementNatureHasChanged: Boolean = false;
  frequencyBandHasChanged: Boolean = false;
  equipementTechnologieHasChanged: Boolean = false;
  encryptionFeatureHasChanged: Boolean = false;



  alertfileError = false;
  fileError: string;

  @ViewChild('datasheet') datasheetVar: any;

  constructor(public quotation: QuotationService, private router: Router,
    public quoteStep1Service: QuoteStep1Service,
    public glService: Glservice, private modalService: NgbModal,
    public http: HttpClient,
    public country: CountryService, private datePipe: DatePipe
  ) {
  }

  ngOnInit() {

    /*this.findEquipmentType();
    this.findCountries();

    this.findFrequencyBand();
    this.findApprovalType();*/

    this.init();
    this.getOldQuotation();
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

    this.quoteStep1Service.findEquipementNature(this.quotation.approvalType)
      .subscribe((data: any[]) => {
        if (data.length < 1) {
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



  // get technologie from database

  findTechnologie() {

    this.natureId = this.quotation.equipementNature;

    this.quoteStep1Service.findEquipementTech(this.natureId)
      .subscribe((data: any[]) => {
        if (data.length < 1) {
          this.showEquipementTech = false;
        } else {
          this.listTechnologie = data;
          this.showEquipementTech = true;

        }

      }, err => {
        console.log(err);
      });
  }

  // get from data base frequency band list
  findFrequencyBand() {

    this.quoteStep1Service.findFrequencyBand()
      .subscribe((data: any[]) => {
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
      .subscribe((data: any[]) => {
        this.listCountries = data;

        console.log(' ******* country success******* ');
        console.log(JSON.stringify(this.listCountries));
        this.disabledCountry = [];
      }, err => {

        console.log(' ******* country error******* ');
        console.log(err);
      });
  }

  findCountries() {
    this.glService.findCountries()
      .subscribe((data: any[]) => {
        console.log('data');
        console.log(data);
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
  /*
    findCategories(countryId: number, categorieContent) {

      this.glService.findCategories(countryId)
        .subscribe((data: any[]) => {

          this.listCategories = data;

          this.quotation.category[countryId] = this.listCategories[0].id;
        });
    }*/

  redirectNextStep(confirmContent) {

    if (this.currentFileUpload == null) {
      this.checkQuotationState();
      this.checkRequired();
      if (this.alertapproval == false && this.alertCountry == false &&
        this.alertencryption == false && this.alertEquipementTechnologie == false
        && this.alertequipmentNature == false && this.alertequipmentType == false
        && this.alertFrequency == false && this.alertfileError == false) {
        this.router.navigate(['/quoteStep2']);

      }


    } else {
      this.modalRef = this.modalService.open(confirmContent, { size: 'sm', backdrop: false, keyboard: false });
    }

  }

  checkRequired() {

    if (this.quotation.approvalType == null) {
      this.alertapproval = true;
    } else {
      this.alertapproval = false;

    }

    if (this.quotation.equipementType == null) {
      this.alertequipmentType = true;
    } else {
      this.alertequipmentType = false;

    }


    if (this.quotation.hasEncryptionFeature == null) {

      this.alertencryption = true;
    } else {
      this.alertencryption = false;

    }

    if (this.showEquipementNature == true && this.quotation.equipementNature == null) {
      this.alertequipmentNature = true;
    } else {
      this.alertequipmentNature = false;

    }

    if (this.showFrequency == true && this.quotation.frequencyBand.length == 0) {
      this.alertFrequency = true;
    } else {
      this.alertFrequency = false;

    }

    if (this.quotation.country.length == 0) {

      this.alertCountry = true;
    } else {
      this.alertCountry = false;

    }

    if (this.quotation.equipementTechnologie.length == 0 && this.showEquipementTech == true) {
      this.alertEquipementTechnologie = true;
    } else {
      this.alertEquipementTechnologie = false;

    }
  }

  goToStep2() {
    if (this.modalRef != null) {
      this.modalRef.close();
    }

    this.router.navigate(['/quoteStep2']);

  }

  goToHome(modal) {
    if (this.modalRef != null) {
      this.modalRef.close();
    }

    this.router.navigate(['/home']);
  }

  // afficher la liste des pays et retourner les categories par pays
  getCountry() {
    if (this.modalRef != null) {
      this.modalRef.close();
    }
    this.quotation.country.push(this.countryId);
    this.alertCountry = false;

  }

  // affect frequency band to object project
  getfrequencyBand(frequencyId: number, isCheck, modal) {

    if ((isCheck) && (this.quotation.frequencyBand.indexOf(frequencyId) === -1)) {
      this.quotation.frequencyBand.push(frequencyId);
      this.findFrequencyAgencyMessage(frequencyId, this.quotation.country, modal);
    } else {
      const index = this.quotation.frequencyBand.indexOf(frequencyId);
      this.quotation.frequencyBand.splice(index, 1);
    }

    this.checkFrequencyCountry(this.quotation.frequencyBand);

    if (this.showFrequency == true && this.quotation.frequencyBand.length == 0) {
      this.alertFrequency = true;
    } else {
      this.alertFrequency = false;

    }
  }


  // affect frequency band to object project
  getEquipemenetTechnology(technologyId: number, event) {

    if ((event.target.checked) && (this.quotation.equipementTechnologie.indexOf(technologyId) === -1)) {
      this.quotation.equipementTechnologie.push(technologyId);
    } else {
      const index = this.quotation.equipementTechnologie.indexOf(technologyId);
      this.quotation.equipementTechnologie.splice(index, 1);
    }
    if (this.quotation.equipementTechnologie.length > 0) {
      this.alertEquipementTechnologie = false;
    } else {
      this.alertEquipementTechnologie = true;
    }
  }

  // affect category to object project
  getCategory() {
    const categoryId = this.quotation.category[this.countryId];
    this.glService.findCategory(categoryId)
      .subscribe((data: any) => {
        const cat = data;
        this.categoryName[this.countryId] = cat.categoryName;
        if (this.modalRef != null) {
          this.modalRef.close();
        }
      }, err => {
        console.log(err);
      });

  }

  setCategory(id: number) {
    this.countryId = id;
  }

  getEquipementNature() {

    this.quotation.frequencyBand = [];
    this.quotation.equipementTechnologie = [];
    this.disabledCountry = [];
    // this.checkCountry = [];
    this.checkFrequency = [];
    this.checkTech = [];
    // this.quotation.country = [];
    this.natureId = this.quotation.equipementNature;

    if (this.quotation.equipementNature == null) {
      this.showFrequency = false;
      this.showEquipementTech = false;

    } else {

      this.findTechnologie();
      const frequency = this.listEquipmentNature.find(x => x.id == this.quotation.equipementNature);

      if (frequency.hasFrequency == true) {
        this.showFrequency = true;

      } else {
        this.showFrequency = false;
      }
    }

    if (this.showEquipementNature == true && this.quotation.equipementNature == null) {
      this.alertequipmentNature = true;
    } else {
      this.alertequipmentNature = false;

    }
  }

  // affect approval type to object project
  getApprovalType() {
    this.quotation.country = [];
    this.checkCountry = [];
    this.quotation.equipementTechnologie = [];
    this.quotation.equipementNature = null;
    this.quotation.frequencyBand = [];

    // find from database equipment nature
    this.findEquipmentNature();
    // find from database country of that approval

    this.findCountriesByApproval(this.quotation.approvalType);


    if (this.quotation.approvalType == null) {
      this.alertapproval = true;
    } else {
      this.alertapproval = false;
    }
  }

  getEncryption() {
    if (this.quotation.hasEncryptionFeature == null) {
      this.alertencryption = true;
    } else {
      this.alertencryption = false;
    }
  }

  getEquipmentType() {
    this.alertequipmentType = false;
  }

  // open modal category
  open(countryId: number, categorieContent) {
    this.countryId = countryId;
    // this.findCategories(countryId, categorieContent);

  }

  close() {
    if (this.modalRef != null) {
      this.modalRef.close();
    }

  }

  resetForm() {
    this.close();
    this.init();
  }

  // check if an agency approval a frequency
  checkFrequencyCountry(idFrequency: number[]) {

    // idfrequency is list of frequency chose

    this.glService.findCountries()
      .subscribe((data: any[]) => {

        this.listCountries = data;
        this.initDisabledCountry();

        this.listCountries.forEach(item => {
          this.disabledCountry[item.id] = false;

          this.quoteStep1Service.findFrequenciesByCountry(item.id)
            .subscribe((data2: any[]) => {

              let listFrequenciesCountry: any[] = [];
              listFrequenciesCountry = data2;

              let idFreq: any[] = [];

              listFrequenciesCountry.forEach(itemfc => {
                idFreq.push(itemfc.id);
              });



              idFrequency.forEach(idFrequen => {

                idFreq.indexOf(idFrequen);
                if (idFreq.indexOf(idFrequen) === - 1) {



                  let id = item.id;
                  this.disabledCountry[id] = true;
                  this.checkCountry[id] = false;

                  let index = this.quotation.country.indexOf(id);


                  if (index > -1) {
                    this.quotation.country.splice(index, 1);
                  }

                }

              });

            });
        });
      }, err => {

        console.log(' ******* country error******* ');
        console.log(err);
      });

  }

  // save quotation
  saveQuotation(status, modalContent) {

    if (this.modalRef != null) {
      this.modalRef.close();
    }


    this.modalRef = this.modalService.open(modalContent, { size: 'sm', backdrop: false, keyboard: false });
    const today = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.quotation.date = today;
    this.quotation.status = status;

    this.glService.saveQuotation(this.quotation).
      subscribe(data => {
        // this.quotation = null;
        this.init();
      }, err => {
        console.log(err);
      });
  }



  // select file
  selectFile(event) {
    this.currentFileUpload = event.target.files;

    let formdata: FormData = new FormData();
    formdata.append('file', this.currentFileUpload.item(0));
    this.http.post('/api/uploadFile', formdata)
      .subscribe((data: Result) => {

        if (!data.isValid) {
          this.alertfileError = true;
          this.fileError = data.message;
          this.currentFileUpload = null;
        } else {

          this.alertfileError = false;
          this.fileError = null;
          this.quotation.dataSheetUrl = data.message;
        }



      }, err => {
        console.log(err);
      });

  }
  // reset all variable

  init() {

    this.findCountries();
    this.findEquipmentType();
    this.findFrequencyBand();
    this.findApprovalType();

    this.quotation.country.forEach(value => {

      this.checkCountry[value] = true;
    });


    this.findEquipmentNature();

    if (this.quotation.equipementNature == null) {
      this.showFrequency = false;
      this.showEquipementTech = false;

    } else {

      this.findTechnologie();

      if (this.quotation.frequencyBand.length >= 1) {
        this.showFrequency = true;
      } else {
        this.showFrequency = false;
      }
    }



    this.quotation.equipementTechnologie.forEach(value => {
      this.checkTech[value] = true;
    });

    this.quotation.frequencyBand.forEach(value => {
      this.checkFrequency[value] = true;
    });

    this.checkFrequencyCountry(this.quotation.frequencyBand);

    this.frequencyArray = null;

    this.file = null;
    this.countryId = null;
    this.categoryName = null;


    // this.disabledCountry = [];

    this.messageError = null;

    // this.natureId = null;
    this.datasheetVar.nativeElement.value = '';

    this.alertapproval = false;
    this.alertequipmentType = false;
    this.alertencryption = false;
    this.alertequipmentNature = false;
    this.alertFrequency = false;
    this.alertCountry = false;
    this.alertEquipementTechnologie = false;

    this.alertfileError = false;
    this.fileError = null;

  }


  hasCountryFrequencyRestriction(countryId, event, modal) {

    this.countryId = countryId;
    // verifie si le composant est checke
    if (event.target.checked) {
      // this.modalRef.close();

      // recupere la liste des frequences selectionnées
      let lfrequencyId = this.quotation.frequencyBand;

      // si la liste a des frequences on verifie si le pays selectionne a des restrictions
      if (this.quotation.frequencyBand.length > 0) {
        this.quoteStep1Service.hasCountryFrequencyRestriction(lfrequencyId, countryId).
          subscribe(data => {
            let hasRequirement = data;
            // si le pays a des restriction on ouvre le modal
            if (hasRequirement) {
              this.findAgencyMessage(countryId);
              this.modalRef = this.modalService.open(modal, { size: 'lg', backdrop: false, keyboard: false });

              if (this.quotation.country.length == 0) {
                this.alertCountry = true;
              } else {
                this.alertCountry = false;
              }
            } else {
              // si le pays n'a pas  des restriction on ajoute directement le pays au tableaux des pays
              this.getCountry();
              if (this.quotation.country.length == 0) {
                this.alertCountry = true;
              } else {
                this.alertCountry = false;
              }
            }
          });

        // si la liste de frequence est vide on ajoute directement le pays au tableaux des pays

      } else {
        this.getCountry();

        if (this.quotation.country.length == 0) {
          this.alertCountry = true;
        } else {
          this.alertCountry = false;
        }
      }


    } else {

      const index = this.quotation.country.indexOf(countryId);

      if (index > -1) {
        this.quotation.country.splice(index, 1);
        this.quotation.category[countryId] = null;
      }

      if (this.quotation.country.length == 0) {
        this.alertCountry = true;
      } else {
        this.alertCountry = false;
      }
    }
  }


  resetCountry() {

    if (this.modalRef != null) {
      this.modalRef.close();
    }
    this.checkCountry[this.countryId] = false;

    if (this.quotation.country.indexOf(this.countryId) > -1) {
      let index = (this.quotation.country.indexOf(this.countryId));
      this.quotation.country.splice(index, 1);
    }

  }

  findAgencyMessage(id) {

    this.quoteStep1Service.findAgencyMessage(id).
      subscribe((data: any[]) => {
        this.messageResult = data;
      });
  }

  findFrequencyAgencyMessage(fid, cid: number[], modal) {

    this.quoteStep1Service.findFrequencyCountryMessage(fid, cid).
      subscribe((data: any[]) => {
        this.messageString = data;

        if (data.length > 0) {
          if (this.modalRef != null) {
            this.modalRef.close();
          }
          this.modalRef = this.modalService.open(modal, { size: 'lg', backdrop: false, keyboard: false });

        }
      });
  }

  checkQuotationState() {

    if (this.quotation.hasEncryptionFeature != this.oldHasEncryptionFeature) {
      this.quotation.state = true;
    }

    this.quotation.equipementTechnologie.forEach(item => {
      if (this.oldEquipementTechnologie.indexOf(item) == -1) {
        this.quotation.state = true;
      }
    });

    this.quotation.frequencyBand.forEach(item => {
      if (this.oldFrequencyBand.indexOf(item) == -1) {
        this.quotation.state = true;
      }
    });

    this.quotation.country.forEach(item => {
      if (this.oldCountry.indexOf(item) == -1) {
        this.quotation.state = true;
      }
    });

    if (this.quotation.approvalType != this.oldApprovalType) {
      this.quotation.state = true;
    }

    if (this.quotation.equipementType != this.oldEquipementType) {
      this.quotation.state = true;
    }

    if (this.quotation.equipementNature != this.oldEquipementNature) {
      this.quotation.state = true;
    }

  }

  getOldQuotation() {

    // get old country list
    this.quotation.country.forEach(item => {
      this.oldCountry.push(item);
    });

    // get old approval type
    this.oldApprovalType = this.quotation.approvalType;

    // get old EquipementType
    this.oldEquipementType = this.quotation.equipementType;

    // get old Equipement Nature
    this.oldEquipementNature = this.quotation.equipementNature;

    // get Frequency band
    this.quotation.frequencyBand.forEach(item => {
      this.oldFrequencyBand.push(item);
    });

    // get old Equipement Technologie
    this.quotation.equipementTechnologie.forEach(item => {
      this.oldEquipementTechnologie.push(item);
    });

    // get old Encryption Feature
    this.oldHasEncryptionFeature = this.quotation.hasEncryptionFeature;
  }
}

