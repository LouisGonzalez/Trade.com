import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  public USER: User = new User();
  
  userName: string = "";
  isCompany: boolean = false;

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
      console.log('ls:',res);
      this.homeUserService.selectedUser = res;
      this.userName = this.homeUserService.selectedUser.user;
      this.USER = this.homeUserService.selectedUser;

      if(this.USER.StandardAccount==undefined){
        this.isCompany = true;
      }
    });
  }

  getIsLogged(){
    this.sessionUserService.getIsLogged().subscribe((res) => {
      console.log('esta logueadoss',res);
      if(!res){
        this._router.navigate(['/login']);
      }else{
        this.getUser();
      }
    });
  }

}
