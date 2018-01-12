import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Customcomponents/header/header.component';
import { AsideComponent } from './Customcomponents/aside/aside.component';
import { HomeComponent } from './Customcomponents/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {QuoteStep1Component} from './Customcomponents/quote-step1/quote-step1.component';
import {QuoteStep2Component} from './Customcomponents/quote-step2/quote-step2.component';
import {QuoteStep3Component} from './Customcomponents/quote-step3/quote-step3.component';

import { LoginComponent } from './Customcomponents/login/login.component';
import {QuoteStep1Service} from './service/quote-step1-service';
import {Glservice} from './service/glservice';
import {ProjectService} from './service/project.service';
import {CountryService } from './service/country.service';


import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'quoteStep1', component: QuoteStep1Component},
  {path: 'quoteStep2', component: QuoteStep2Component},
  {path: 'quoteStep3', component: QuoteStep3Component},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

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
    LoginComponent

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [QuoteStep1Service, Glservice,
     ProjectService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
