import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }
  
  loginSuccess() {
    // this.isLoggedIn = true;
    this.router.navigate(['/users']);
  }
}
