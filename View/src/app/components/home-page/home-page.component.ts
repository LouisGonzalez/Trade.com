import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  userName: string = "";

  constructor(private _router:Router, public homeUserService: HomeUserService) { }

  ngOnInit(): void {
    // this.homes();
    this.getLogin();
  }

  logout(){
    console.log("Close session");
    this.homeUserService.getLogout().subscribe(
      data=>{
        this._router.navigate(['/login']);
      } ,
      error=>{
        console.error(error);
      }
    );
  }

  getLogin(){
    this.homeUserService.getLogin().subscribe(
      data=>{
        let resJson = JSON.stringify(data);
        let res = JSON.parse(resJson);
        if(res.redirect!=undefined || res.redirect!=null){
          if(res.redirect=='/login'){
            this._router.navigate(['/login']);
          }else{
            this.getUser();
          }
        }
      } ,
      error=>{
        console.error(error);
      }
    );
  }

  getUser(){
    this.homeUserService.getUser().subscribe((res) => {
      this.homeUserService.selectedUser = res;
      this.userName = this.homeUserService.selectedUser.user;
      // console.log('Usuario:',this.homeUserService.selectedUser);
    });
  }

}
