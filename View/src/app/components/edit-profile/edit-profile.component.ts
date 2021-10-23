import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from '../../services/home-service/session-user.service';
import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public USER: User = new User();
  isCompany: boolean = false;
  nombres: string;
  apellidos: string;
  fecha_nacimiento: any;

  empresa: string;
  mision: string;
  vision: string;
  descripcion: any;

  updateForm : FormGroup=new FormGroup({
    pais: new FormControl(null,Validators.required),
    telefono: new FormControl(null,Validators.required),
    correo: new FormControl(null,[Validators.email,Validators.required]),
    extension: new FormControl(null,Validators.required),
    nombre: new FormControl(null,Validators.required),
    apellido: new FormControl(null,Validators.required),
    fecha_nacimiento: new FormControl(null,Validators.required)
  });
  updateFormC : FormGroup=new FormGroup({
    pais: new FormControl(null,Validators.required),
    telefono: new FormControl(null,Validators.required),
    correo: new FormControl(null,[Validators.email,Validators.required]),
    extension: new FormControl(null,Validators.required),
    // nombre: new FormControl(null,Validators.required),
    empresa: new FormControl(null,Validators.required),
    // apellido: new FormControl(null,Validators.required),
    descripcion: new FormControl(null,Validators.required)
    // fecha_nacimiento: new FormControl(null,Validators.required)
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
      if(this.USER.StandardAccount==undefined){
        this.isCompany = true;
      }
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
      return;
    }else{
      console.log(this.updateForm.value);
      // this.msjError = "";
    }


  }

  updateProfileCompany(){
    if(!this.updateFormC.valid){
      // this.msjError = "You must fill in all the fields";
      console.log('Invalid:');
      return;
    }else{
      console.log(this.updateFormC.value);
      // this.msjError = "";
    }


  }

  setFormUpd(){
    if(this.USER.StandardAccount != undefined){
      // console.log('Es usuario')
      this.updateForm.get('pais')?.setValue(this.USER.pais);
      this.updateForm.get('nombre')?.setValue(this.USER.StandardAccount?.nombres);
      this.updateForm.get('apellido')?.setValue(this.USER.StandardAccount?.apellidos);
      this.updateForm.get('telefono')?.setValue(this.USER.telefono);
      this.updateForm.get('correo')?.setValue(this.USER.correo);
      this.updateForm.get('extension')?.setValue(this.USER.extension);
      this.updateForm.get('fecha_nacimiento')?.setValue(this.USER.StandardAccount?.fecha_nacimiento);
    }else{
      this.updateFormC.get('pais')?.setValue(this.USER.pais);
      this.updateFormC.get('empresa')?.setValue(this.USER.BusinessAccount?.empresa);
      this.updateFormC.get('descripcion')?.setValue(this.USER.BusinessAccount?.descripcion);
      this.updateFormC.get('telefono')?.setValue(this.USER.telefono);
      this.updateFormC.get('correo')?.setValue(this.USER.correo);
      this.updateFormC.get('extension')?.setValue(this.USER.extension);
      // this.updateFormC.get('fecha_nacimiento')?.setValue(this.USER.BusinessAccount?.);
    }
    
    // console.log('pais:',this.updateForm.value);
  }

}
