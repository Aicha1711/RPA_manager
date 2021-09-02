import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EnvironnementdialogComponent } from 'src/app/dialog/environnementdialog/environnementdialog.component';
import { Environnement } from './environnement';
import { EnvironnementService } from 'src/app/services/environnement.service';
import { ElementRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-environnements',
  templateUrl: './environnements.component.html',
  styleUrls: ['./environnements.component.css']
})
export class EnvironnementsComponent implements OnInit {

  EnvironnementData: any = [];
  displayedColumns: string[] = ['select', 'position', 'name', 'description', 'actions'];
  dataSource: MatTableDataSource<Environnement>;
  selection = new SelectionModel<Environnement>(true, []);
  selectedRow: any;


  logData(row: any) {
    this.selectedRow = row;
  }


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;


  constructor(public dialog: MatDialog, private environnementService: EnvironnementService) { }

  ngOnInit() {
    this.getAllEnvironnement();
   /*  this.environnementService.getAllEnvironnements().subscribe(
      (data => {
        this.EnvironnementData = data;
        this.dataSource = new MatTableDataSource<Environnement>(this.EnvironnementData);
    })) */
      
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
  getEnvironnement() {
    this.EnvironnementData = this.environnementService.getAllEnvironnements();
  }

  deleteEnvironnement(id: number) {
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
  this.deleteEnv(id);

}
})
}
})
      } 
    })}
  openDialog() {
 this.dialog.open(EnvironnementdialogComponent).afterClosed()
      //.subscribe(() => this.refreshParent());
      .subscribe(() => {
        this.getAllEnvironnement();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'new Robot',
          showConfirmButton: false,
          timer: 3000
        })
      })

  }
 

  refreshParent() {
    this.dialog.afterAllClosed
      .subscribe(() =>
        this.getEnvironnement());
  }

  getAllEnvironnement() {
    this.environnementService.getAllEnvironnements().subscribe(
      (data => {
        console.log(data)
        this.EnvironnementData = data;
        this.dataSource = new MatTableDataSource<Environnement>(this.EnvironnementData);

      })
    )

  }

  deleteEnv(id: number) {
  this.environnementService.deleteEnvironnement(id).subscribe
        (data => {
          this.dataSource = new MatTableDataSource<Environnement>(this.EnvironnementData);
          this.getAllEnvironnement();


        });

    
  } 

 

}
