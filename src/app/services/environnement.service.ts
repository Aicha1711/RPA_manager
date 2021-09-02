import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environnement } from '../modules/environnements/environnement';

@Injectable({
  providedIn: 'root'
})
export class EnvironnementService {


  constructor(private http: HttpClient) { }

  getAllEnvironnements() : Observable<Environnement[]>{
    return this.http.get<Environnement[]>("http://localhost:8082/environnements");
  }

  createEnvironnement(environment:Environnement): Observable<Environnement>{
    return this.http.post<Environnement>("http://localhost:8082/environnements",environment);
  }
 
  updateEnvironnement(environment:Environnement): Observable<Environnement>{
    return this.http.put<Environnement>("http://localhost:8082/environnements",environment);
  }
 
  deleteEnvironnement(id:number): Observable<Object>{
    return this.http.delete("http://localhost:8082/environnements/"+id);
  }

  

}
