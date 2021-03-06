import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {DatePipe} from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './Customcomponents/header/header.component';
import {AsideComponent} from './Customcomponents/aside/aside.component';
import {HomeComponent} from './Customcomponents/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {QuoteStep1Component} from './Customcomponents/quote-step1/quote-step1.component';
import {QuoteStep2Component} from './Customcomponents/quote-step2/quote-step2.component';
import {QuoteStep3Component} from './Customcomponents/quote-step3/quote-step3.component';
import {QuoteStep4Component} from './Customcomponents/quote-step4/quote-step4.component';

import {LoginComponent} from './Customcomponents/login/login.component';
import {QuoteStep1Service} from './service/quote-step1-service';
import {Glservice} from './service/glservice';
import {QuotationService} from './service/quotation.service';
import {EquipementService} from './service/equipement.service';
import {CountryService} from './service/country.service';
import {AgencyPriceService} from './service/agency-price.service';
import {QuoteStep2Service} from './service/quote-step2.service';
import {QuoteStep3Service} from './service/quote-step3.service';
import {FormsModule} from '@angular/forms';
import {PurchaseorderService} from './service/purchaseorder.service';
import {FormUploadComponent} from './Customcomponents/form-upload/form-upload.component';
import {HttpClientModule} from '@angular/common/http';
import {UploadFileComponent} from './service/upload-file/upload-file.component';
import { PdfGeneratorComponent } from './Customcomponents/pdf-generator/pdf-generator.component';
import { HomeTestComponent } from './Customcomponents/home-test/home-test.component';
import { LoginService } from './service/login.service';
import { SaveQuotationComponent } from './Customcomponents/save-quotation/save-quotation.component';
import { SaveQuotationService } from './service/save-quotation.service';

const appRoutes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'quoteStep1', component: QuoteStep1Component},
  {path: 'quoteStep2', component: QuoteStep2Component},
  {path: 'quoteStep3', component: QuoteStep3Component},
  {path: 'quoteStep4', component: QuoteStep4Component},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'upload', component: FormUploadComponent},
  {path: 'pdfGenerator', component: PdfGeneratorComponent},
  { path: 'homeTest', component: HomeTestComponent},
  { path: 'login', component: LoginComponent},
  { path: 'savedQuotation', component: SaveQuotationComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    HomeComponent,
    QuoteStep1Component,
    QuoteStep2Component,
    QuoteStep3Component,
    LoginComponent,
    QuoteStep4Component,
    FormUploadComponent,
    UploadFileComponent,
   PdfGeneratorComponent,
   HomeTestComponent,
   SaveQuotationComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot(), // Keep in mind the "forRoot"-magic nuances!
    RecaptchaFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [QuoteStep1Service, SaveQuotationService, DatePipe, QuoteStep3Service,
    QuoteStep2Service, Glservice, EquipementService, PurchaseorderService,
    QuotationService, CountryService, AgencyPriceService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
