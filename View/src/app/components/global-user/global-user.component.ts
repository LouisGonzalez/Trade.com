import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import { ProfileService } from 'src/app/services/profile-user/profile.service';
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

  constructor(private _router:Router, 
    public homeUserService: HomeUserService, 
    public sessionUserService: SessionUserService,
    public profileService: ProfileService) { }

  ngOnInit(): void {
    this.getIsLogged();
    this.getAllUser()
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
      this.homeUserService.selectedUser = res;
      this.USER = this.homeUserService.selectedUser;
      if(this.USER.StandardAccount==undefined){
        this.isCompany = true;
      }
      this.users.push(this.USER);
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

  getAllUser(){
    this.profileService.getAllUser().subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
