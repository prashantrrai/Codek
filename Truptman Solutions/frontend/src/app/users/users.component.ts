import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit{
  countryArray = ['Nepal', "Australia", "India", "Pakistan"]
  stateArray = ["Kathmandu", "sakhra", "Victoria", "wales", "Tasmania", "Gujarat", "Mumbai", "Delhi", "Bengaluru", "Chennai", "Ahmedabad", "Islamabad", "Lahore"]
  isEditMode: boolean = false;
  id: any;
  userArray: any[] = []

  constructor(
    public _users: UsersService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this._users.getUser().subscribe({
      next: (response: any) => {
        this.userArray = response.data
      },
      error: (error: any) => {
        console.log(error);
      },
    })
  }

  editbtn(data: any): void {
    console.log(data)
    this.id = data._id
    this.isEditMode = true;

    this._users.userForm.patchValue({
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      address1:data.address1,
      address2: data.address2,
      city: data.city,
      state: data.state,
      country: data.country,
      zip: data.zip
    });
  }
  // -----------------------ON SUBMIT BUTTON-----------------------//
  onSubmit() {
    if (this._users.userForm.valid) {
      // console.log(this._users.userForm.value)
      // const formData = this._users.userForm.value;

      if (this.isEditMode) {
        this._users.updateUser(this.id).subscribe({
          next: (response: any) => {
            console.log(response)
            this.toastr.success(response.message);
            this.getUsers()
            this._users.userForm.reset()
            this._users.userForm.patchValue({
              state:'',
              country:'',
            });
          },
          error: (error: any) => {
            console.log(error);
            this.toastr.error(error.message);
          },
        });
      } else {
        this._users.addUser().subscribe({
          next: (response: any) => {
            console.log(response)
            this._users.userForm.reset()
            this.toastr.success(response.message);
            this.getUsers()
          },
          error: (error: any) => {
            console.error(error);
            this.toastr.error(error.message);
          },
        });
      }
    } else {
      this.toastr.warning('All Fields are Required');
    }
  }

  deleteUser(id: any){
    let YES = confirm("Are you sure want to Delete User?")
    if(YES){
      this._users.deleteUser(id).subscribe({
        next: (response: any) => {
          console.log(response)
          this.toastr.success(response.message)
          this.getUsers()
          this.isEditMode = false
        },
        error: (error: any) => {
          console.error(error)
          this.toastr.error(error.message);
        }
      })
    }
  }


  logout(){
    this.authService.setAuthenticated(false);
    this.router.navigate(['/login']);
  }

}
