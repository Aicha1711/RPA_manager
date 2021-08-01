import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user_id")
    this.router.navigate(['/login']);

  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
   
  }
}
