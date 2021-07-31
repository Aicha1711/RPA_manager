import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialog} from '@angular/material/dialog';
import { EnvironnementdialogComponent } from 'src/app/dialog/environnementdialog/environnementdialog.component';
import { Environnement } from './environnement';
import { EnvironnementService } from 'src/app/services/environnement.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-environnements',
  templateUrl: './environnements.component.html',
  styleUrls: ['./environnements.component.css']
})
export class EnvironnementsComponent implements OnInit {
  
  EnvironnementData: any = [];
  displayedColumns: string[] = ['select','position', 'name', 'description','actions'];
  dataSource: MatTableDataSource<Environnement>;
  selection = new SelectionModel<Environnement>(true, []);
  selectedRow: any;
   

  logData(row: any){ 
    this.selectedRow = row;
  }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 @ViewChild('filter') filter: ElementRef; 
  

  constructor(public dialog:MatDialog, private environnementService:EnvironnementService) { }

  ngOnInit()  {
    this.environnementService.getAllEnvironnements().subscribe(
      (data => {
        this.EnvironnementData = data;
        this.dataSource = new MatTableDataSource<Environnement>(this.EnvironnementData);
       
      })
      )
  }
  deleteEnvironnement(id:number){
   
    if(confirm('Are you sure to delete??'))
    {this.environnementService.deleteEnvironnement(id).subscribe
      (data =>{
      this.dataSource = new MatTableDataSource<Environnement>(this.EnvironnementData);
      
     
    
    });
    
    }
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
checkboxLabel(row?: Environnement): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}
getEnvironnement(){
  this.EnvironnementData= this.environnementService.getAllEnvironnements();}


  openDialog(){
  
 this.dialog.open(EnvironnementdialogComponent).afterClosed()
      .subscribe(() => this.refreshParent());

}

refreshParent(){
  this.dialog.afterAllClosed
    .subscribe(() => 
    this.getEnvironnement());
} 
}
