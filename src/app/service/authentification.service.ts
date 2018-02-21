import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthentificationService {
  authenticated = false;
  constructor( private http: HttpClient) { }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('/user').subscribe((response: any) => {
      let user = response;
      if (user.name) {
          this.authenticated = true;
      } else {
          this.authenticated = false;
      }
      return callback && callback();
  }) ;
}

}
