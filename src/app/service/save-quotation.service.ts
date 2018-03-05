import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SaveQuotationService {

  constructor(private http: HttpClient) { }


   getSavedQuotation(status: any) {
    return this.http.get('/api/findQuotationModelsByStatus?status=' + status);
  }
}
