import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-processdialog',
  templateUrl: './processdialog.component.html',
  styleUrls: ['./processdialog.component.css']
})
export class ProcessdialogComponent implements OnInit {
  srcResult:any;
  constructor() { }

  ngOnInit(): void {
  }
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
