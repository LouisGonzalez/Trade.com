import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { any } from 'sequelize/types/lib/operators';
import { AddContactService } from 'src/app/services/add-contact.service';

export interface dataContact {
  cuenta: any;
  cuenta_contacto: any;
  descripcion: any;
  nickname: any;
}

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contacForm : FormGroup=new FormGroup({
    nickname: new FormControl(null,Validators.required),
    descripcion: new FormControl(null,Validators.required),
  });
  msj: string = "";
  // private addContactService: AddContactService;

  constructor(@Inject(MAT_DIALOG_DATA) public data: dataContact, 
  private addContactService: AddContactService,
  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contacForm.get('nickname')?.setValue(this.data.nickname);
  }

  addContact(){
    if(!this.contacForm.valid){
      return;
    }
    this.data.descripcion = this.contacForm.get('descripcion')?.value;
    this.data.nickname = this.contacForm.get('nickname')?.value;
    // console.log(this.data);
    this.addContactService.createContact(this.data).subscribe(
      res => {
        console.log(res);
        this.dialog.closeAll();
      },
      error =>{
        this.msj = "Contact cannot be created"
        console.log(error);
      }
    );

  }

}
