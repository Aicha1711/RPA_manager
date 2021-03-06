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
    return this.http.get<Robot[]>("http://localhost:8082/robots");
  }

  createRobot(robot:Robot): Observable<Robot>{
    return this.http.post<Robot>("http://localhost:8082/robots",robot);
  }
 
  editRobot(id : number, robot:Robot): Observable<Robot>{
<<<<<<< HEAD
    return this.http.put<Robot>("http://localhost:8082/robots/"+id,robot);
=======
    return this.http.put<Robot>("http://localhost:8080/robots/"+id,robot);
>>>>>>> a84f28606cff28ce1f203a268710466f5df202ce
  }
 
  deleteRobot(id:number): Observable<Object>{
    return this.http.delete("http://localhost:8082/robots/"+id);
  }

  deleteallRobots(): Observable<any>{

      return this.http.delete("http://localhost:8082/robots");
  }



}
