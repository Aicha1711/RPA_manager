import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Environnement } from 'src/app/modules/environnements/environnement';
import { FileDB } from 'src/app/modules/posts/file-db';
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

  forms: FormGroup;
  
process : Process = new Process();


  srcResult:any;

  constructor(private matDialog: MatDialog, private processService: ProcessService , private _formBuilder: FormBuilder, private router:Router,private environnementService: EnvironnementService, private packageService : PackagesService ) { }
  
  
  form = this._formBuilder.group({
    environnements : ['',Validators.required],
    fileInfos: ['',Validators.required]
 
   })

   environnements : Observable<Environnement[]>;
   fileInfos: Observable<FileDB[]>;

  ngOnInit(){
    this.forms = this._formBuilder.group({
      name:['',Validators.required],
      description: ['',Validators.required],
      priority:['',Validators.required],
      environnements_id : ['',Validators.required],
      fileName: ['',Validators.required],
   
     })
    this.environnements =this.environnementService.getAllEnvironnements();
    this.fileInfos = this.packageService.getFiles();
  }


  saveProcess() {
  
    }

    onSubmit(){
      console.log(this.forms.value)
      this.processService.createProcess(this.forms.value).subscribe( data =>{
          console.log(data);
          this.matDialog.closeAll();
        },
        error => console.log(error));
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
