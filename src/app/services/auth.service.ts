import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http: HttpClient,public jwtHelper: JwtHelperService) { }

  login(data:any): Observable<any> {
    return this.http.post("http://localhost:8080/auth/login", data, {observe: 'response'});
  }

  isUser() {
    return localStorage.getItem('isClient') === 'true';
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (token) {
        return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
}
}
