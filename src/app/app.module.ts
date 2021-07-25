import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { DeleterobotComponent } from './confirm/deleterobot/deleterobot.component';




@NgModule({
  declarations: [
    AppComponent,
    DeleterobotComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule, 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } ;

