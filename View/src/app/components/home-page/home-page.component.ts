import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionUserService } from '../../services/home-service/session-user.service';
import { io } from "socket.io-client";;

import {HomeUserService} from '../../services/home-service/home-user.service';
import { GLOBAL } from 'src/app/services/global';

const SOCKET_ENDPOINT = GLOBAL.URL;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  userName: string = "";
  socket:any;
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

  newUser(){
    this.socket.emit('new user', this.userName);
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
      this.homeUserService.selectedUser = res;
      this.userName = this.homeUserService.selectedUser.user;
    });
  }

  getIsLogged(){
    this.sessionUserService.getIsLogged().subscribe((res) => {
      if(!res){
        this._router.navigate(['/login']);
      }else{
        this.getUser();
      }
    });
  }

}
