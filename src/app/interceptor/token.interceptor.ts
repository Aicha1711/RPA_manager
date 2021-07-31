import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from '../services/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.auth.isAuthenticated()){
            request = request.clone({
                headers: new HttpHeaders({
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                })


            });

            return next.handle(request);
        }
        return  next.handle(request);



    }
}
