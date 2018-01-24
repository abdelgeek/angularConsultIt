import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProjectService {

  name: string;
  model: string;
  brand: string;
  description: string;
  approvalType: number;
  equipementType: number;
  equipementNature: number;
  frequencyBand: number[];
  equipementTechnologie: number[];
  country: number[];
  category: number[];
  hasEncryptionFeature: boolean;
  dataSheetUrl: string;
  status: number;
  date: any;

  constructor(public http: Http) {

    this.country = [];
    this.category = [];
    this.equipementTechnologie = [];
    this.frequencyBand = [];
  }

  saveQuotation(project: ProjectService) {
    return this.http.post('http://localhost:8084/saveQuotation', project).
      map(resp => resp.json());
  }
}
