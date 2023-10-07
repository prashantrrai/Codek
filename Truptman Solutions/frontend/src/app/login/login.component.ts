import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit() {
    // console.log(this.loginForm.value)
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password

    if (this.loginForm.valid) {

      const isAuthenticated = this.authService.login(email, password);
      console.log('isAuthenticated:', isAuthenticated);


      if (isAuthenticated) {
        this.authService.setAuthenticated(true);
        this.router.navigate(['/users']);
        this.toastr.success("Authentication Successfull")
      } else {
        this.toastr.error("Authentication Failed")
      }
    } else {
      this.toastr.warning("Email and Password is Required")
    }
  }

}
