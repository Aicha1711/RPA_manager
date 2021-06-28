import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotsdialogComponent } from './robotsdialog/robotsdialog.component';
import { PostsdialogComponent } from './postsdialog/postsdialog.component';
import { EnvironnementdialogComponent } from './environnementdialog/environnementdialog.component';
import { JobsdialogComponent } from './jobsdialog/jobsdialog.component';
import { ProcessdialogComponent } from './processdialog/processdialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';







@NgModule({
  declarations: [
    ProcessdialogComponent,
    JobsdialogComponent,
    EnvironnementdialogComponent,
    PostsdialogComponent,
    RobotsdialogComponent,
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule
  

    
  ]

  
})
export class DialogModule { }
