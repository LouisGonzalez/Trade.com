import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { EmmitChatService } from 'src/app/services/chat/emmit-chat.service';
import { ProfileService } from 'src/app/services/profile-user/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from '../dialogs/add-contact/add-contact.component';


export interface dataContact {
  cuenta: any;
  cuenta_contacto: any;
  descripcion: any;
  nickname: any;
}

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  // @Output() userO = new EventEmitter<any>();
  @Input() userO: User;
  @Input() userOf: User;
  @Input() userLog: User;
  isCompany: boolean = false;

  // @ViewChild(ChatComponent) chatH: ChatComponent;

  constructor(public dialog: MatDialog, 
    private emmitChatService:EmmitChatService,
    public profileService: ProfileService) { }

  ngOnInit(): void {
    this.setIsCompany();
  }

  setIsCompany(){
    if(this.userOf.BusinessAccount!=undefined){
      this.isCompany = true;
    }
  }

  activateChat(){
    console.log('adfa');
    let data = {
      cuenta_dos: this.userO.user,
      cuenta_uno: this.userOf.user
      // cuenta_uno: 'Yeferal'
    }
    this.emmitChatService.onChatListen(data);
    // this.chatH.hola();
  }

  addContact(){
    let data = {
      cuenta: this.userO.id_cuenta,
      cuenta_contacto: this.userOf.id_cuenta,
      descripcion: '',
      nickname: this.userOf.user
    }
    console.log(data);
    this.openModal();
  }

  openModal(){
    let data = {
      cuenta: this.userO.id_cuenta,
      cuenta_contacto: this.userOf.id_cuenta,
      descripcion: '',
      nickname: this.userOf.user
    }
    let dig = this.dialog.open(AddContactComponent,{
      data
    });
    console.log('f',dig);
  }

}
