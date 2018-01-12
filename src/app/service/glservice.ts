import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Glservice {

  constructor(private http: Http) { }

  findCountries() {
  return  this.http.get('http://localhost:8084//findCountries')
    .map(resp => resp.json());

  }

  findCategory(categoryId) {
    return this.http.get('http://localhost:8084//findOneCategory?categoryId=' + categoryId )
      .map(resp => resp.json());
  }

  findCategories(idCountry: number) {
    return this.http.get('http://localhost:8084/findCategorieByCountry?idCountry=' + idCountry )
  .map(resp => resp.json());
    }

}
