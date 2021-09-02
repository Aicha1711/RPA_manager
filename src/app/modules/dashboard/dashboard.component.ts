import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { JobService } from 'src/app/services/job.service';
import { ProcessService } from 'src/app/services/process.service';
import { Process } from '../processus/process';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ProcessData: any = [];
  displayedColumns: string[] = [ 'name','description', 'priority', 'actions'];
  dataSource : MatTableDataSource<Process>;



  constructor(public dialog:MatDialog, private processService : ProcessService) { }

  ngOnInit(): void {
    this.processService.getAllProcess().subscribe(
      (data => {
        this.ProcessData = data;
        this.dataSource = new MatTableDataSource<Process>(this.ProcessData);
       
      })
      )
  }

    
  }
