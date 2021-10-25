import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import {HomeUserService} from '../../services/home-service/home-user.service';

import{ AffiliatesService } from '../../services/affiliates.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page-affiliates',
  templateUrl: './page-affiliates.component.html',
  styleUrls: ['./page-affiliates.component.css']
})
export class PageAffiliatesComponent implements OnInit {

  users: Array<User> = [];
  public USER: User = new User();
  isCompany: boolean = false;
  affiliateForm: FormGroup;

  constructor(private _router:Router, public homeUserService: HomeUserService, public sessionUserService: SessionUserService, public affiliate: AffiliatesService, public formBuilder: FormBuilder) { }

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


  getAffiliates(){
    this.affiliateForm = this.formBuilder.group({
      id_cuenta_empresarial: 1,
    })
    this.affiliate.findAffiliates(this.affiliateForm.value).subscribe(
      response => {
        //AQUI DEVUELVE LA QUERY Y YA MIGUELIN SE ENCARGA DE OBTENERLOS CON ALGUN MODELO
      },
      error => {
        console.log(error);
      }
    )
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
