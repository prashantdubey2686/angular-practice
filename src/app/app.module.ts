import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './app/navbar/navbar.component';
import { FrontpageComponent } from './app/frontpage/frontpage.component';
import { FooterComponent } from './app/footer/footer.component';
import { HomeComponent } from './app/home/home.component';
import { SigninComponent } from './app/signin/signin.component';
import { RegisterComponent } from './app/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './app/admin/admin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
//import { UsdinrPipe } from './app/pippes/usdinr.pipe';
import { AgGridAngular } from 'ag-grid-angular';
import { AgGridModule } from 'ag-grid-angular';
//import { ProfileComponent } from './app/profile/profile.component';
//import { ProfileModule } from './app/profile/profile.module';
import { ProfileModule } from './app/profile/profile.module';
import { TokenInterceptorInterceptor } from './app/services/common/token-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontpageComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent,
    AdminComponent,
    //ProfileComponent,
   // UsdinrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule ,
    ProfileModule, 
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] 
})
export class AppModule { }
