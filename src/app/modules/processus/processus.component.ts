import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { ProcessdialogComponent } from 'src/app/dialog/processdialog/processdialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Process } from './process';
import { ProcessService } from 'src/app/services/process.service';
import { ElementRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-processus',
  templateUrl: './processus.component.html',
  styleUrls: ['./processus.component.css']
})
export class ProcessusComponent implements OnInit {
  ProcessData: any = [];
  displayedColumns: string[] = ['select', 'position', 'name', 'environnement', 'priority','description', 'actions'];
  dataSource : MatTableDataSource<Process>;
  selection = new SelectionModel<Process>(true, []);
  selectedRow: any;
   

  logData(row: any){ 
    this.selectedRow = row;
  }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef; 
    
  constructor(public dialog:MatDialog, private processService : ProcessService) {}
    
  
  ngOnInit() {
   this.getAllProcess();
  
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
getProcess(){
  this.ProcessData= this.processService.getAllProcess();
  
  }
  
  deleteprocess(id:number){
    Swal.fire({
      title: 'Are you sure to delete??',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
      customClass: {
        confirmButton: 'btn btn-success'
      }
    }).then((result) => {

      if (result.isConfirmed) {

        let timerInterval:any;
Swal.fire({
title: 'Auto close alert!',
html: 'I will close in <b></b> milliseconds.',
timer: 2000,
timerProgressBar: true,
didOpen: () => {
Swal.showLoading()
timerInterval = setInterval(() => {
const content = Swal.getHtmlContainer()
if (content) {
  const b = content.querySelector('b')
  if (b) {
    Swal.getTimerLeft()
  }
}
}, 100)
},
willClose: () => {
clearInterval(timerInterval)
}
}).then((result) => {

if (result.dismiss === Swal.DismissReason.timer) {
Swal.fire('Succès', 'deleted ', 'success')
.then((res)=>{
if (res.isConfirmed) {
  this.deleteprocessbyid(id);

}
})
}
})
      } 
    })
  }
  
  
  
  
  
  
  
  
  
  

openDialog(){
  this.dialog.open(ProcessdialogComponent).afterClosed()
  //.subscribe(() => this.getAllProcess());
  .subscribe(()=>{
    this.getAllProcess();
    Swal.fire({
     position: 'top-end',
     icon: 'success',
     title: 'new Process',
     showConfirmButton: false,
     timer: 3000
   })
    })
}



refreshParent(){
  this.dialog.afterAllClosed
    .subscribe(() => 
    this.getProcess());
}

getAllProcess(){
  this.processService.getAllProcess().subscribe(
    (data => {
      this.ProcessData = data;
      this.dataSource = new MatTableDataSource<Process>(this.ProcessData);
     
    })
    )
}
deleteprocessbyid(id:number){
  this.processService.deleteProcess(id).subscribe
    (data =>{
    this.dataSource = new MatTableDataSource<Process>(this.ProcessData);
   this.getAllProcess();
  });
}

}
  



