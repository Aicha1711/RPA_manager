import { Component, OnInit, ViewChild } from '@angular/core';
import { RobotsService } from 'src/app/services/robots.service';
import { Robot } from './robot';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})


export class RobotsComponent implements OnInit {
  RobotData: any=[];
  displayedColumns: string[] = ['id','name','ipAddress','port','createdAt'];
  dataSource: MatTableDataSource<Robot>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  
  constructor( private robotService: RobotsService) {} 

    
  
  
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


}
