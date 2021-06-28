import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-processdialog',
  templateUrl: './processdialog.component.html',
  styleUrls: ['./processdialog.component.css']
})
export class ProcessdialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectFormControl = new FormControl('', Validators.required);
 

}
