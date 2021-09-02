import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Robot } from 'src/app/modules/robots/robot';
import { RobotsService } from 'src/app/services/robots.service';

@Component({
  selector: 'app-robot-update',
  templateUrl: './robot-update.component.html',
  styleUrls: ['./robot-update.component.css']
})
export class RobotUpdateComponent implements OnInit {
      id : number;
      robot : Robot;
  constructor(private robotService: RobotsService,private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
  
  }


}
