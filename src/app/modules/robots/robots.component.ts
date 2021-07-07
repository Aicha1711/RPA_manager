import { Component, OnInit, ViewChild } from '@angular/core';
import { RobotsService } from 'src/app/services/robots.service';
import { Robot } from './robot';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { RobotsdialogComponent } from 'src/app/dialog/robotsdialog/robotsdialog.component';
import { MatDialog,MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})


export class RobotsComponent implements OnInit {
  
  RobotData: any=[];
  displayedColumns: string[] = ['select','position','name','description','domain','statut'];
  dataSource: MatTableDataSource<Robot>;
  selection = new SelectionModel<Robot>(true, []);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  
  constructor( private robotService: RobotsService, public dialog: MatDialog) {} 

    
  
  
   ngOnInit() {
    this.robotService.getRobots().subscribe(
    (data =>  { this.RobotData = data;
                this.dataSource = new MatTableDataSource<Robot>(this.RobotData);

    }))
                        
                         }



   ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
                      }


   applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();}
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
    checkboxLabel(row?: Robot): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }



    
      openDialog(){
  
        this.dialog.open(RobotsdialogComponent);
       
       }
    }
    
    
    
    




