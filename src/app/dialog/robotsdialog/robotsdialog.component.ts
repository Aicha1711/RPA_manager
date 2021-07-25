import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Robot } from 'src/app/modules/robots/robot';
import { RobotsService } from 'src/app/services/robots.service';




@Component({
  selector: 'app-robotsdialog',
  templateUrl: './robotsdialog.component.html',
  styleUrls: ['./robotsdialog.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})

export class RobotsdialogComponent implements OnInit {
 

 robot: Robot = new Robot();
 
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hide = true;
  
  constructor(private matDialog: MatDialog,private robotService: RobotsService, private _formBuilder: FormBuilder, private router:Router ) {}
  
  ngOnInit()  {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  
  saveRobot() {
    this.robotService.createRobot(this.robot).subscribe( data =>{
        console.log(data);
        this.matDialog.closeAll();
      },
      error => console.log(error));
    }

   

  onSubmit(){
      console.log(this.robot),
      this.saveRobot();
    }


  }