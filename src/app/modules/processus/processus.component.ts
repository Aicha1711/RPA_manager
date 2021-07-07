import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { ProcessdialogComponent } from 'src/app/dialog/processdialog/processdialog.component';
import { MatDialog} from '@angular/material/dialog';

  
export interface PeriodicElement {
  name: string;
  position: number;
  environnement: string;
  priority: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Process1', environnement: 'ENV1',priority:'low',description:'first process'},
  {position: 2, name: 'Process2', environnement: 'ENV1',priority:'low',description:' process test'},
  {position: 3, name: 'Process3', environnement: 'ENV1',priority:'high',description:''},
  {position: 4, name: 'Process4', environnement: 'ENV1',priority:'high',description:'second process'},
  {position: 5, name: 'Process5', environnement: 'ENV1',priority:'low',description:' process1.1.0'},
  {position: 6, name: 'Process6', environnement: 'ENV1',priority:'low',description:'third process'},
  {position: 7, name: 'Process7', environnement: 'ENV1',priority:'high',description:'My process'},
]; 

@Component({
  selector: 'app-processus',
  templateUrl: './processus.component.html',
  styleUrls: ['./processus.component.css']
})
export class ProcessusComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'environnement', 'priority','description', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  selectedRow: any;
   

  logData(row: any){ 
    this.selectedRow = row;
  }


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
    
  constructor(public dialog:MatDialog) {}
    
  
  ngOnInit() {
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
  
 this.dialog.open(ProcessdialogComponent);

}

}
  



