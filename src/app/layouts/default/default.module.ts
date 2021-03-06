import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { DialogModule } from 'src/app/dialog/dialog.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { EnvironnementsComponent } from 'src/app/modules/environnements/environnements.component';
import { JobsComponent } from 'src/app/modules/jobs/jobs.component';
import { ProcessusComponent } from 'src/app/modules/processus/processus.component';
import { RobotsComponent } from 'src/app/modules/robots/robots.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule} from '@angular/material/dialog';
import { ProcessdialogComponent } from 'src/app/dialog/processdialog/processdialog.component';
import { HttpClientModule } from '@angular/common/http';
import { RobotsdialogComponent } from 'src/app/dialog/robotsdialog/robotsdialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';






 
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    EnvironnementsComponent,
    JobsComponent,
    ProcessusComponent,
    RobotsComponent,
 
  ],

  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DialogModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,  
    MatSnackBarModule ,
    HighchartsChartModule,
    FlexLayoutModule,
    MatCardModule
  
  
  ],
  


   entryComponents:[ProcessdialogComponent,RobotsdialogComponent],
})
export class DefaultModule { }





