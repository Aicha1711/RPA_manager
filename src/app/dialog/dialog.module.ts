import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RobotsdialogComponent } from './robotsdialog/robotsdialog.component';
import { PostsdialogComponent } from './postsdialog/postsdialog.component';
import { EnvironnementdialogComponent } from './environnementdialog/environnementdialog.component';
import { JobsdialogComponent } from './jobsdialog/jobsdialog.component';
import { ProcessdialogComponent } from './processdialog/processdialog.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';











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
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    MatProgressBarModule,
   
    
   
    
  ],
  
  exports: [
    ProcessdialogComponent,
    JobsdialogComponent,
    EnvironnementdialogComponent,
    PostsdialogComponent,
    RobotsdialogComponent
  ]

  
})
export class DialogModule { }
