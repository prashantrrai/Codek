import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  signupFORM!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _home: HomeService,
    private toastr: ToastrService
    ){
    this.signupFORM = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(){
    this.getdata()
  }

  registerUser(){
    if (this.signupFORM.valid) {
      const formData = this.signupFORM.value;
      console.log(formData);
      this._home.signupUser(formData).subscribe({
        next: (response: any) => {
          console.log(response)
          // alert("Registration Successful")
          this.toastr.success('Registration Successful', 'Success');
        },
        error: (error: any) => {
          console.log(error)
          this.toastr.error('Registration Failed', 'Error');
        }
      })
    } else {
      console.log("error")
      // alert("All fields are required")
      this.toastr.warning('All fields are required');
    }
  }


  getdata(){
      this._home.getUser().subscribe({
        next: (response: any) => {
          console.log(response)
        },
        error: (error: any) => {
          console.log(error)
        }
      })
    }


}
