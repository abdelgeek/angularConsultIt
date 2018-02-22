import {Country} from '../class/country';
import {QuotationService} from './quotation.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable()
export class Glservice {

  constructor(private http: HttpClient) {}

  findCountries() {
    return this.http.get('/api/findCountries');
  }

  findCategory(categoryId) {
    return this.http.get('/api/findOneCategory?categoryId=' + categoryId);
  }

  findCategories(idCountry: number) {
    return this.http.get('/api/findCategorieByCountry?idCountry=' + idCountry);
  }

  saveQuotation(quotation: QuotationService) {
    return this.http.post('/api/saveQuotation', quotation);
  }
  findCategoryPriceForQuotation(quotation: QuotationService) {
    return this.http.post('/api/findCategoryPriceForQuotation', quotation);
  }
}
