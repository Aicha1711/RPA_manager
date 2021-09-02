import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloackSecurityService } from 'src/app/services/keycloack-security.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router, public securityService:KeycloackSecurityService) { }

  ngOnInit(): void {
  }
/* 
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user_id")
    this.router.navigate(['/login']);

  } */

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
   
  }
  onLogout(){
    this.securityService.logout();
    
  }

  onLogin(){
    this.securityService.login();
  }


  onChangePassword(){
    this.securityService.manageAccount();
  }
 
 
}
