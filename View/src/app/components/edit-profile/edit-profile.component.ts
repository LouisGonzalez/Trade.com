import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public USER: User = new User();

  updateForm : FormGroup=new FormGroup({
    pais: new FormControl(null,Validators.required),
    telefono: new FormControl(null,Validators.required),
    correo: new FormControl(null,[Validators.email,Validators.required]),
    extension: new FormControl(null,Validators.required),
    nombre: new FormControl(null,Validators.required),
    apellido: new FormControl(null,Validators.required),
    fecha_nacimiento: new FormControl(null,Validators.required)
  });

  
  constructor(private _router:Router, public homeUserService: HomeUserService, public sessionUserService: SessionUserService) { }

  ngOnInit(): void {
    this.getIsLogged();
    // this.setFormUpd();
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
      console.log(this.USER);
      this.setFormUpd();
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

  updateProfile(){
    if(!this.updateForm.valid){
      // this.msjError = "You must fill in all the fields";
      console.log('Invalid:');
      // return;
    }else{
      console.log(this.updateForm.value);
      // this.msjError = "";
    }
    

  }

  setFormUpd(){
    this.updateForm.get('pais')?.setValue(this.USER.pais);
    this.updateForm.get('nombre')?.setValue(this.USER.nombre);
    this.updateForm.get('apellido')?.setValue(this.USER.apellido);
    this.updateForm.get('telefono')?.setValue(this.USER.telefono);
    this.updateForm.get('correo')?.setValue(this.USER.correo);
    this.updateForm.get('extension')?.setValue(this.USER.extension);
    this.updateForm.get('fecha_nacimiento')?.setValue(this.USER.fecha_nacimiento);
    // console.log('pais:',this.updateForm.value);
  }

}
