import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Process } from '../modules/processus/process';


@Injectable({
  providedIn: 'root'
})
export class JobService {


    constructor(private http: HttpClient) { }
  
  runProcess(process_id:number) : Observable<Process[]>{
    return this.http.get<Process[]>("http://localhost:8082/jobs/"+process_id);
  }

   }

