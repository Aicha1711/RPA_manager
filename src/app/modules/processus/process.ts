import { Observable } from "rxjs";
import { Environnement } from "../environnements/environnement";

export class Process {
    position: number;
    id : number;
    name: String;
    description: String;
    priority: Boolean;
    environnement: Environnement;
    file:File;
  
}
