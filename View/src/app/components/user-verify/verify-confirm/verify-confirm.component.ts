import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChargedComponent } from '../../dialogs/charged/charged.component';
import { User } from '../../../models/user/user';
import { SessionUserService } from '../../../services/home-service/session-user.service';
import { MsjAcceptComponent } from '../../dialogs/msj-accept/msj-accept.component';
@Component({
  selector: 'app-verify-confirm',
  templateUrl: './verify-confirm.component.html',
  styleUrls: ['./verify-confirm.component.css']
})
export class VerifyConfirmComponent implements OnInit {

  token: string;
  email: string;
  jwtToken: string;
  msj: string = "";
  closeResult: string;
  USER: User = new User();

  constructor(private rutaActiva: ActivatedRoute,private _router:Router,
    public dialog: MatDialog, 
    private modalService: NgbModal, 
    public sessionUserService: SessionUserService) { }

  ngOnInit(): void {
    this.getParams();
    this.USER.correo = this.email;
    this.verificationSend();
  }

  getParams(){
    this.token = this.rutaActiva.snapshot.params.token;
    this.email = this.rutaActiva.snapshot.params.email;
    this.jwtToken = this.rutaActiva.snapshot.params.jwtToken;
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
      token: this.token,
      email: this.email,
      jwtToken: this.jwtToken
    }

    this.sessionUserService.postConfirmVerify(data).subscribe(
      res => {
        this.msj = res.msj;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
    
    // this._router.navigate(['/home-user']);
  }

  redirection(){
    this._router.navigate(['/']);
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
