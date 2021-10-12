import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators,  } from '@angular/forms';

import {LoginService} from '../../services/login.service';

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
  
  constructor(private _router:Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }


  getLoginView(form: NgForm){
    this.loginService.getLoginView().subscribe((res) => {
      console.log('respuesta: ', res);
    });
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
      this.msjError = "Debe de llenar todos los campos";
      console.log('Invalid');
      return;
    }else{
      this.msjError = "";
    }

    this.loginService.postLogin(this.loginForm.value).subscribe(
      data=>{console.log(data);this._router.navigate(['/register']);} ,
      error=>{console.error(error);this._router.navigate(['/login']); }
    );
  }

  // sendDataLogin(form: NgForm){
    
  //   this.loginService.postLogin(form.value).subscribe(
  //     data=>{console.log(data);this._router.navigate(['/register']);} ,
  //     error=>console.error(error)
  //   )
  // }

}
