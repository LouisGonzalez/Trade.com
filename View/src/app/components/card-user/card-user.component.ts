import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { EmmitChatService } from 'src/app/services/chat/emmit-chat.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  // @Output() userO = new EventEmitter<any>();
  @Input() userO: any;
  @Input() userOf: User;
  isCompany: boolean = false;

  // @ViewChild(ChatComponent) chatH: ChatComponent;

  constructor(private emmitChatService:EmmitChatService) { }

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
      cuenta_dos: this.userO,
      // cuenta_uno: this.userOf.user
      cuenta_uno: 'Yeferal'
    }
    this.emmitChatService.onChatListen(data);
    // this.chatH.hola();
  }

}
