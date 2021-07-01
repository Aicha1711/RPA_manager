import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Robot } from '../modules/robots/robot';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {


  constructor(private http: HttpClient) { }

  getRobots() : Observable<Robot[]>{
    return this.http.get<Robot[]>("http://localhost:8080/robots");
  }

}
