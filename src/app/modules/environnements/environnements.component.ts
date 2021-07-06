import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialog} from '@angular/material/dialog';
import { EnvironnementdialogComponent } from 'src/app/dialog/environnementdialog/environnementdialog.component';

export interface PeriodicElement {
 
  position: number;
  name: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Env1', description: 'Mon premier environnement'},
  {position: 2, name: 'Env2',  description: 'Mon second environnement'},
  {position: 3, name: 'Environement de Test',  description: 'Environnement de test'},
  {position: 4, name: 'Environement 1',  description: 'Environnement num 1'},
  {position: 5, name: 'Env4',  description: 'Environnement des robots de test'},
  {position: 6, name: 'Env5',  description: 'Environnement 5'},


]; 
@Component({
  selector: 'app-environnements',
  templateUrl: './environnements.component.html',
  styleUrls: ['./environnements.component.css']
})
export class EnvironnementsComponent implements OnInit {
  displayedColumns: string[] = ['select','position', 'name', 'description','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  selectedRow: any;
   

  logData(row: any){ 
    this.selectedRow = row;
  }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

  constructor(public dialog:MatDialog) { }

  ngOnInit()  {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
checkboxLabel(row?: PeriodicElement): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}

openDialog(){
  
 this.dialog.open(EnvironnementdialogComponent);

}
}
