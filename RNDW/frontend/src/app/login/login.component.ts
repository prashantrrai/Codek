import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFORM!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _home: HomeService,
    private toastr: ToastrService
    ){
    this.loginFORM = this.fb.group({
      email_phone: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(){
  }


  loginUser(){
    if (this.loginFORM.valid) {
      const formData = this.loginFORM.value;
      console.log(formData);

      this._home.loginUser(formData).subscribe({
        next: (response: any) => {
          console.log(response)

          this.toastr.success('Login Successful', 'Success');
        },
        error: (error: any) => {
          console.log(error)
          this.toastr.error('Login Failed', 'Error');
        }
      })
    } else {
      console.log("error")
      this.toastr.warning('All fields are required');
    }
  }
}
