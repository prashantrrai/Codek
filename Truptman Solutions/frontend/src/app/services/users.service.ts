import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,

  ) { }

  private baseURL = environment.apiUrl


  userForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    address1: ['', Validators.required],
    address2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    zip: ['', [Validators.required, Validators.minLength(6)]],
  })

  addUser() {
    console.log(this.userForm.value)
    return this.http.post(`${this.baseURL}/add`, this.userForm.value)
  }

  getUser() {
    return this.http.get(`${this.baseURL}/users`)
  }

  updateUser(userId: any) {
    return this.http.put(`${this.baseURL}/update/${userId}`, this.userForm.value)
  }

  deleteUser(userId: any) {
    return this.http.delete(`${this.baseURL}/delete/${userId}`)
  }


}
