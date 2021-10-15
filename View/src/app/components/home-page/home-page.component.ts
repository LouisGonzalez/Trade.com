import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _router:Router, public homeService: HomeService) { }

  ngOnInit(): void {
    this.homes();
  }

  logout(){
    // this._user.logout()
    // .subscribe(
    //   data=>{console.log(data);this._router.navigate(['/login'])},
    //   error=>console.error(error)
    // )
  }

  homes(){
    this.homeService.getUser().subscribe(
      data => {
        console.log(data);
        // this._router.navigate(['/home-user']);
      },
      error => {
        console.error(error); 
        // this.msjErrorCuenta = "The username or password are not correct"
      }
    );
  }

}
