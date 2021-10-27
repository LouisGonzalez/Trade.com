import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { HomeUserService } from 'src/app/services/home-service/home-user.service';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css']
})
export class MyContactsComponent implements OnInit {

  users: Array<User> = [];
  public USER: User = new User();
  isCompany: boolean = false;
  
  constructor(private _router:Router, public homeUserService: HomeUserService, public sessionUserService: SessionUserService) { }

  ngOnInit(): void {
    // this.getIsLogged();
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

}
