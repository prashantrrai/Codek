import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }


  login(email: string, password: string): boolean {
    if(email==='prashant@gmail.com' && password==='admin123'){
      return this.isAuthenticated = true;
    }
    return this.isAuthenticated = false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }


  setAuthenticated(status: boolean): boolean {
    this.isAuthenticated = status;
    console.log(this.isAuthenticated)
    return this.isAuthenticated;
  }
  //-----------for sending login Status to auth guard for allowing access to /users-------------//
  // isLoggedIn(): boolean {
  //   return this.isAuthenticated;
  //   console.log(this.isAuthenticated)
  // }
}
