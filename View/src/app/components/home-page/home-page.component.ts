import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';


import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  userName: string = "";

  constructor(private _router:Router, public homeUserService: HomeUserService, public sessionUserService: SessionUserService) { }

  ngOnInit(): void {
    // this.homes();
    // this.getLogin();
    this.getIsLogged();
  }

  logout(){
    console.log("Close session");
    this.sessionUserService.getLogout().subscribe(
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
        // console.log(res);
        this.getIsLogged();
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
      // console.log(res);
      this.homeUserService.selectedUser = res;
      this.userName = this.homeUserService.selectedUser.user;
      // console.log('Usuario:',this.homeUserService.selectedUser);
    });
  }

  getIsLogged(){
    this.sessionUserService.getIsLogged().subscribe((res) => {
      console.log('esta logueado',res);
      if(!res){
        this._router.navigate(['/login']);
      }else{
        this.getUser();
      }
    });
  }

}
