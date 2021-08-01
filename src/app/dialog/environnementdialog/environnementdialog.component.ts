import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Environnement } from 'src/app/modules/environnements/environnement';
import { EnvironnementService } from 'src/app/services/environnement.service';
import { Robot } from 'src/app/modules/robots/robot';
import { Observable } from 'rxjs';
import { RobotsService } from 'src/app/services/robots.service';
@Component({
  selector: 'app-environnementdialog',
  templateUrl: './environnementdialog.component.html',
  styleUrls: ['./environnementdialog.component.css']
})
export class EnvironnementdialogComponent implements OnInit {

  formEnv: FormGroup;
  environnement : Environnement = new Environnement();
  selected ='No robot selected';
  /* environnements = new FormControl(); */
 /*  environnementList: string[] = ['Robot1', 'Robot2', 'Robot3']; */
  srcResult: any;
  

  constructor(private matDialog: MatDialog,private environnementService: EnvironnementService, private _formBuilder: FormBuilder, private router:Router,private robotService: RobotsService) {
    
   }
  form = this._formBuilder.group({
   robots : ['',Validators.required]

  })
  robots : Observable<Robot[]>;

  
  ngOnInit(){
    this.formEnv  = this._formBuilder.group({
      robot_id : ['',Validators.required],
      description:['',Validators.required],
      name:['',Validators.required]
   
     })
    this.robots=this.robotService.getRobots();
  }

  onSubmit(){
    console.log(this.formEnv.value)
    this.environnementService.createEnvironnement(this.formEnv.value).subscribe( data =>{
      console.log(data);
      this.matDialog.closeAll();
    },
    error => console.log(error));
  }

 
  saveEnvironnement() {

console.log(this.environnement)
   /* this.environnementService.createEnvironnement(this.environnement).subscribe( data =>{
        console.log(data);
        this.matDialog.closeAll();
      },
      error => console.log(error));*/
    }

    

/*   selectFormControl = new FormControl('', Validators.required);
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  } */
  reset(){}
}
