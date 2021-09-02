
import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';

declare var Keycloak: any;
@Injectable({providedIn: 'root'})

export class KeycloackSecurityService {
 public kc:KeycloakInstance;
 public tokenParsed: any;
  constructor() { }


  async init(){
console.log("Security Initialisation...");
   this.kc= new Keycloak({
     url: "http://localhost:8080/auth/",
     realm:"rpa_realm",
     clientId:"rpamanager"
   });

    await this.kc.init({
      onLoad: "login-required" 
   /*   onLoad:"check-sso", */
     
      
    });
   console.log(this.kc.token);
   this.tokenParsed = this.kc.tokenParsed;
  }

  public isAuthenticated() {
    return this.kc.authenticated;
  }

  public isAdmin() {
    return this.kc.hasRealmRole('admin');
  }

  public getUsername() {
    return this.tokenParsed?.name;
  }

  public logout() {
    this.kc.logout({ redirectUri: "http://localhost:4200/" });
  }

  login() {
    this.kc.login({ redirectUri: "http://localhost:4200/" });
  }

  manageAccount() {
    this.kc.accountManagement();
  }

  

 
}
