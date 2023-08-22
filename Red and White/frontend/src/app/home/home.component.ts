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
  }

  registerUser(){
    if (this.signupFORM.valid) {
      const formData = this.signupFORM.value;
      console.log(formData);
      this._home.signupUser(formData).subscribe({
        next: (response: any) => {
          console.log(response)
          this.signupFORM.reset()
          this.toastr.success('Registration Successful', 'Success');
        },
        error: (error: any) => {
          console.log(error)
          this.toastr.warning(error.error.message);
        }
      })
    } else {
      console.log("error")
      this.toastr.warning('All fields are required');
    }
  }

}
