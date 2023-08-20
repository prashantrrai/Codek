import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  registeredData: any[] = []

  constructor(
    private _home: HomeService,
    ){ }

  ngOnInit(){
    this.getdata()
  }

  getdata(){
    this._home.getUser().subscribe({
      next: (response: any) => {
        console.log(response)
        this.registeredData = response.data
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

}
