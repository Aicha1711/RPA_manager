import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  error = '';
  constructor(private  router: Router, private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createSinginForm();
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.auth.login(this.form.value).subscribe(
        data => {
          console.log(data);
          localStorage.setItem("user_id",data.body.userid);
          localStorage.setItem("token",data.body.token);
          
          if(data.body.roleName === 'ROLE_USER'){
            this.router.navigate(['/']);
          }

        },
        err => {
          if (err.status === 403 || err.status === 401) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Email ou mot de passe incorrect!'
            })

          } 
         
        }
    );
  }

  private createSinginForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
