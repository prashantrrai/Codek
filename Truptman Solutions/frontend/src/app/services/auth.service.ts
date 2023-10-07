import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }


  login(email: string, password: string): boolean {
    if(email==='prashant@gmail.com' && password==='admin123'){
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false; 
  }


  setAuthenticated(status: boolean): void {
    this.isAuthenticated = status;
    console.log("status:",this.isAuthenticated)
  }
  //-----------for sending login Status to auth guard for allowing access to /users-------------//
  isLoggedIn(): boolean {
    return this.isAuthenticated; 
  }
}
