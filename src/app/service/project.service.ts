import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  name: string;
 model: string;
 brand: string;
  description: string;
  approvalType: number;
  equipementNature: number[];
  country: number[];
  frequcenyBand: number[];
  category: number[];


  constructor() {
   this.equipementNature = [];
    this.country = [];
    this.category = [];
    this.frequcenyBand = [];
  }

}
