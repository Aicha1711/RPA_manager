import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Process } from '../modules/processus/process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private http: HttpClient) { }
  
  getAllProcess() : Observable<Process[]>{
    return this.http.get<Process[]>("http://localhost:8082/process");
  }

  createProcess(process:Process): Observable<Process>{
    return this.http.post<Process>("http://localhost:8082/process",process);
  }
 
  updateProcess(process:Process): Observable<Process>{
    return this.http.put<Process>("http://localhost:8082/process",process);
  }
 
  deleteProcess(id:number): Observable<Object>{
    return this.http.delete("http://localhost:8082/process/"+id);
  }



}
