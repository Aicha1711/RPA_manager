import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Environnement } from 'src/app/modules/environnements/environnement';
import { Process } from 'src/app/modules/processus/process';
import { EnvironnementService } from 'src/app/services/environnement.service';
import { PackagesService } from 'src/app/services/packages.service';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-processdialog',
  templateUrl: './processdialog.component.html',
  styleUrls: ['./processdialog.component.css']
})

export class ProcessdialogComponent implements OnInit {
  
process : Process = new Process();

  srcResult:any;

  constructor(private matDialog: MatDialog, private processService: ProcessService , private _formBuilder: FormBuilder, private router:Router,private environnementService: EnvironnementService, private packageService : PackagesService ) { }
  
  
  form = this._formBuilder.group({
    environnements : ['',Validators.required],
    fileInfos: ['',Validators.required]
 
   })

   environnements : Observable<Environnement[]>;
   fileInfos?: Observable<any>;

  ngOnInit(){
    this.environnements =this.environnementService.getAllEnvironnements();
    this.fileInfos = this.packageService.getFiles();
  }


  saveProcess() {
    this.processService.createProcess(this.process).subscribe( data =>{
        console.log(data);
        this.matDialog.closeAll();
      },
      error => console.log(error));
    }

    onSubmit(){
      console.log(this.process),
      this.saveProcess();
    }


/*  
  
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }  */

}
