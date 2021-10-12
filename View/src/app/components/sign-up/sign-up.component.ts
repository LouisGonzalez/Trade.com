import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import {SignUpService} from '../../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  registerForm : FormGroup=new FormGroup({
    id: new FormControl(null,Validators.required),
    id_company: new FormControl(null),
    user: new FormControl(null,Validators.required),
    password: new FormControl(null, Validators.required),
    pais: new FormControl(null,Validators.required),
    telefono: new FormControl(null,Validators.required),
    correo: new FormControl(null,[Validators.email,Validators.required]),
    extension: new FormControl(null,Validators.required),
    nombre: new FormControl(null,Validators.required),
    apellido: new FormControl(null,Validators.required),
    fecha_nacimiento: new FormControl(null,Validators.required)
  });

  isCompany: boolean = false;
  public isUser: boolean = false;
  
  constructor(private _router:Router, public signUpService: SignUpService) { }

  ngOnInit(): void {
  }

  setUser(){
    this.isUser = true;
    this.isCompany = false;
    console.log("Cambio user");
  }
  
  setCompany(){
    this.isUser = false;
    this.isCompany = true;
    console.log("Cambio Company");
  }

  setSelected(seleccion:string){
    if(seleccion=="Personal"){
      this.setUser();
    }else if(seleccion=="Company"){
      this.setCompany();
    }else{
      this.isUser = false;
    this.isCompany = false;
    }
    
  }

  register(){
    if(!this.registerForm.valid){
      // this.msjError = "You must fill in all the fields";
      console.log('Invalid:');
      return;
    }else{
      console.log(this.registerForm.value);
      // this.msjError = "";
    }

    this.signUpService.postSignUp(this.registerForm.value).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/home-user']);
      },
      error => {
        console.error(error); 
        // this.msjErrorCuenta = "The username or password are not correct"
      }
    );
  }

}
