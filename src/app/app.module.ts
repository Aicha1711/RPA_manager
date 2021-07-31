import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { DeleterobotComponent } from './confirm/deleterobot/deleterobot.component';
import { LoginComponent } from './login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';



  
@NgModule({
  declarations: [
    AppComponent,
    DeleterobotComponent,
    LoginComponent,

   
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule, 
    ReactiveFormsModule,
    FormsModule,
   
   
  ],
  providers: [ { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { } ;


