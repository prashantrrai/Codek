import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private serverURL = "http://localhost:8000"
  constructor(private http: HttpClient) { }

  signupUser(bodydata: any): Observable<any>{
    // console.log(bodydata)
    return this.http.post(`${this.serverURL}/signup`, bodydata)
  }

  getUser(): Observable<any>{
    return this.http.get(`${this.serverURL}/getdata`)
  }

  loginUser(bodydata: any): Observable<any>{
    // console.log(bodydata)
    return this.http.post(`${this.serverURL}/login`, bodydata)
  }
}
