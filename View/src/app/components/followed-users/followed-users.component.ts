import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/user/contact';
import { User } from 'src/app/models/user/user';
import { AddContactService } from 'src/app/services/add-contact.service';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-followed-users',
  templateUrl: './followed-users.component.html',
  styleUrls: ['./followed-users.component.css']
})
export class FollowedUsersComponent implements OnInit {

  users: Array<User> = [];
  contacs: Array<Contact> = [];
  public USER: User = new User();
  isCompany: boolean = false;

  constructor(private _router:Router, 
    public homeUserService: HomeUserService, 
    public sessionUserService: SessionUserService,
    public addContactService: AddContactService
    ) { }

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
      // this.users.push(this.USER);
      this.getContacs();
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

  getContacs(){
    let data = {
      cuenta: this.USER.id_cuenta
    };
    console.log(data);
    this.addContactService.getMyContacts(data).subscribe(
      res => {
        // console.log(res);
        this.contacs = res.Contacts;
      },
      error => {
        console.log(error);
      }
    );
  }

}
