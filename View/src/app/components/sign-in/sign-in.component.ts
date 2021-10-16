import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators  } from '@angular/forms';

import {LoginService} from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public loginForm : FormGroup=new FormGroup({
    user: new FormControl(null,Validators.required),
    password: new FormControl(null, Validators.required)
  });

  public msjError = "";
  msjErrorCuenta = "";
  isVerifique: boolean = false;
  
  constructor(private _router:Router, 
    public loginService: LoginService,
    /*private cookie: CookieService*/) { }

  ngOnInit(): void {
    this.getLoginView();
  }


  getLoginView(){
    //if(!this.isVerifique){
      // this.isVerifique = true;
      this.loginService.getLoginView().subscribe(
        data=>{
          // console.log(data);
          let resJson = JSON.stringify(data);
          let res = JSON.parse(resJson);
          // console.log("Redireccionado:",res.redirect);
          if(res.redirect!=undefined || res.redirect!=null){
            if(res.redirect=='/home-user'){
              this._router.navigate(['/home-user']);
            }
          }
        } ,
        error=>{
          console.error(error);
        }
      );
    //}
  }

  // sendDataLogin(form: NgForm){
    
  //   this.loginService.postLogin(form.value).subscribe((res) => {
  //     console.log('respuesta: ', res);
  //     // this.modalService.dismissAll('Cross click')
  //     // this.resetForm(form);
  //   });
  // }


  login(){
    if(!this.loginForm.valid){
      this.msjError = "You must fill in all the fields";
      console.log('Invalid:');
      return;
    }else{
      this.msjError = "";
    }

    this.loginService.postLogin(this.loginForm.value).subscribe(
      data=>{
        let resJson = JSON.stringify(data);
        let res = JSON.parse(resJson);
        // console.log("Redireccionado a:",res.redirect);
        // if(res.redirect!=undefined || res.redirect!=null){
        //   this._router.navigate([res.redirect]);
        // }
        this.getLoginView();
        // console.log(this.cookie.getAll());
        // this.getLoginView();
        // console.log('Se logue');
        // this._router.navigate([res.redirect]);
      } ,
      error=>{
        console.error(error); 
        this.msjErrorCuenta = "The username or password are not correct"
      }
    );
  }

  // sendDataLogin(form: NgForm){
    
  //   this.loginService.postLogin(form.value).subscribe(
  //     data=>{console.log(data);this._router.navigate(['/register']);} ,
  //     error=>console.error(error)
  //   )
  // }

}
