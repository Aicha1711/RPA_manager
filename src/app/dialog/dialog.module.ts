import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotsdialogComponent } from './robotsdialog/robotsdialog.component';
import { PostsdialogComponent } from './postsdialog/postsdialog.component';
import { EnvironnementdialogComponent } from './environnementdialog/environnementdialog.component';
import { JobsdialogComponent } from './jobsdialog/jobsdialog.component';
import { ProcessdialogComponent } from './processdialog/processdialog.component';



@NgModule({
  declarations: [
    ProcessdialogComponent,
    JobsdialogComponent,
    EnvironnementdialogComponent,
    PostsdialogComponent,
    RobotsdialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialogModule { }
