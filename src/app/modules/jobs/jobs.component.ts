import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Process } from '../processus/process';
import { JobService } from 'src/app/services/job.service';
import { ProcessService } from 'src/app/services/process.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  ProcessData: any = [];
  displayedColumns: string[] = ['select', 'position', 'name', 'priority', 'actions'];
  dataSource : MatTableDataSource<Process>;
  selection = new SelectionModel<Process>(true, []);
  selectedRow: any;
   
  logData(row: any){ 
    this.selectedRow = row;
  }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   

  constructor(public dialog:MatDialog, private processService : ProcessService, private jobService : JobService) { }

  ngOnInit(): void {
    this.processService.getAllProcess().subscribe(
      (data => {
        this.ProcessData = data;
        this.dataSource = new MatTableDataSource<Process>(this.ProcessData);
       
      })
      )
  }
  deleteprocess(id:number){
   
    if(confirm('Are you sure to delete??'))
    {this.processService.deleteProcess(id).subscribe
      (data =>{
      this.dataSource = new MatTableDataSource<Process>(this.ProcessData);
     
    
    });
    
    }
   }
   runProcess(){
     this.jobService.runProcess().subscribe(
       data => {
        this.dataSource = new MatTableDataSource<Process>(this.ProcessData);

       }
     )
    
   
  
  }
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 /** Whether the number of selected elements matches the total number of rows. */
 isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  if (this.isAllSelected()) {
    this.selection.clear();
    return;
  }

  this.selection.select(...this.dataSource.data);
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: Process): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}

}
