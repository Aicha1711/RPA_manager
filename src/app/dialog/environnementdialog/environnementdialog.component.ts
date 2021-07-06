import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-environnementdialog',
  templateUrl: './environnementdialog.component.html',
  styleUrls: ['./environnementdialog.component.css']
})
export class EnvironnementdialogComponent implements OnInit {

  srcResult:any;
  selected ='No robot selected';
  environnements = new FormControl();
  environnementList: string[] = ['Robot1', 'Robot2', 'Robot3', 'Robot4', 'Robot5', 'Robot6'];

  constructor() {
    
   }

  ngOnInit(): void {}



  selectFormControl = new FormControl('', Validators.required);
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}
