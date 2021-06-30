import { Component, OnInit } from '@angular/core';
import { RobotsService } from 'src/app/services/robots.service';
import { Robot } from './robot';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {
  
   robots: Robot[];
  constructor( private robotService: RobotsService) { }

  ngOnInit(): void {
    this.robotService.getRobots().subscribe(
                        (data: Robot[]) =>   {
                                                console.log(data);
                                                this.robots = data;


                                              }
                                            );
  }

}
