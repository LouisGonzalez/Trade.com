import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-global-user',
  templateUrl: './global-user.component.html',
  styleUrls: ['./global-user.component.css']
})
export class GlobalUserComponent implements OnInit {

  users: Array<User> = [];
  public USER: User = new User();
  isCompany: boolean = false;

  constructor(private _router:Router, public homeUserService: HomeUserService, public sessionUserService: SessionUserService) { }

  ngOnInit(): void {
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

  getUser(){
    this.homeUserService.getUser().subscribe((res) => {
      // console.log(res);
      this.homeUserService.selectedUser = res;
      this.USER = this.homeUserService.selectedUser;
      // console.log('Usu',this.USER);
      if(this.USER.StandardAccount==undefined){
        this.isCompany = true;
      }
      this.users.push(this.USER);
      // this.userName = this.homeUserService.selectedUser.user;
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
