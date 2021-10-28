import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { EmmitChatService } from 'src/app/services/chat/emmit-chat.service';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import { ProfileService } from 'src/app/services/profile-user/profile.service';
import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-prof-users',
  templateUrl: './prof-users.component.html',
  styleUrls: ['./prof-users.component.css']
})
export class ProfUsersComponent implements OnInit {

  public USER: User = new User();

  // @Input() userO: any;
  userO: any;
  @Input() userOf: User;

  isCompany: boolean = false;
  isCompanyProf: boolean = false;

  constructor(private rutaActiva: ActivatedRoute,private _router:Router, 
    public homeUserService: HomeUserService, 
    public sessionUserService: SessionUserService,
    public profileService: ProfileService,
    private emmitChatService: EmmitChatService
    ) { }

  ngOnInit(): void {
    console.log('param id_cuenta',this.rutaActiva.snapshot.paramMap);
    this.getUserActuality();
    
  }

  getUserActuality(){
    this.profileService.getOneUser(this.rutaActiva.snapshot.params.id_cuenta).subscribe(
      res => {
        console.log(res);
        this.USER = res;
        if(this.USER.BusinessAccount!=undefined){
          this.isCompany = true;
        }
        this.getUser();
      },
      error => {
        console.log(error);
      }
    );
  }

  activateChat(){
    console.log('adfa');
    let data = {
      cuenta_dos: this.userO,
      cuenta_uno: this.USER.user
      // cuenta_uno: 'Yeferal'
    }
    this.emmitChatService.onChatListen(data);
    // this.chatH.hola();
  }

  getUser(){
    this.homeUserService.getUser().subscribe((res) => {
      this.homeUserService.selectedUser = res;
      this.userO = this.homeUserService.selectedUser;
      if(this.userO.BusinessAccount!=undefined){
        this.isCompanyProf = true;
      }
      console.log(this.userO);
      // this.USER = this.homeUserService.selectedUser;
      // if(this.USER.StandardAccount==undefined){
      //   this.isCompany = true;
      // }
      // this.getAllUser();
      // this.users.push(this.USER);
    });
  }

}
