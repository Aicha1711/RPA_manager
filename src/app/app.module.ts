import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { KeycloackSecurityService } from './services/keycloack-security.service';
import { LogComponent } from './login/log/log.component';


export function kcFactory(KcSecurity:KeycloackSecurityService){

  return ()=> KcSecurity.init();
}




  
@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
   
 
  
 
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule, 
    ReactiveFormsModule,
    FormsModule,
    HighchartsChartModule
 
  ],
  providers: [
    {provide:APP_INITIALIZER, deps:[KeycloackSecurityService], useFactory:kcFactory, multi:true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { } ;


