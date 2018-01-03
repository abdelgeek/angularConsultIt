import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Glservice {

  constructor(private http: Http) { }

  findCountries() {
  return  this.http.get('http://localhost:8084//findCountries')
    .map(resp => resp.json());

  }

}
