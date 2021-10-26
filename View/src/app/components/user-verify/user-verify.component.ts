import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChargedComponent } from '../dialogs/charged/charged.component';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';
import { SessionUserService } from '../../services/home-service/session-user.service';
import { MsjAcceptComponent } from '../dialogs/msj-accept/msj-accept.component';
// import { title } from 'process';

@Component({
  selector: 'app-user-verify',
  templateUrl: './user-verify.component.html',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./user-verify.component.css']
})
export class UserVerifyComponent implements OnInit {

  closeResult: string;
  USER: User = new User();
  
  constructor(public dialog: MatDialog,
    private modalService: NgbModal, private _router:Router, public sessionUserService: SessionUserService) { }

  ngOnInit(): void {
    this.getIsLogged();
  }

  getUser(){
    this.sessionUserService.getUser().subscribe((res) => {
      this.sessionUserService.selectedUser = res;
      this.USER = this.sessionUserService.selectedUser;
      if(this.USER.StandardAccount==undefined){
        // this.isCompany = true;
      }
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

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  accepted(){
    this.modalService.dismissAll('Cross click');
    this._router.navigate(['/home-user/user/profile']);
    // this.modalService.close();
    // modal.close('Close click');
  }

  verificationSend(){
    let data = {
      id_cuenta: this.USER.id_cuenta,
      email: this.USER.correo
    };
    console.log(data);
    this.openDialog();
    this.sessionUserService.postVerify(data).subscribe(
      res=>{
        console.log('es',res);
        this.dialog.closeAll();
        this.openDialog2(`A verification email has been sent to: ${this.USER.correo}`, "User Verify");
        this._router.navigate(['/home-user/user/profile']);
      },
      error=>{
        console.error(error);
        this.dialog.closeAll(); 
        this.openDialog2(`A verification email has not been sent to: ${this.USER.correo}`, 'User Verify');
        this._router.navigate(['/home-user/user/profile']);
        // this.msjErrorCuenta = "The username or password are not correct"
      }
    );
    
    // this._router.navigate(['/home-user']);
  }

  openDialog() {
    this.dialog.open(ChargedComponent, {
      data: {
        animal: 'panda'
      }
    });

    // this.dialog.closeAll();
  }

  openDialog2(data: string, title: string) {
    this.dialog.open(MsjAcceptComponent, {
      data: {data: {
        msj: data,
        title: title
      }
      }
    });
  }

  
}
