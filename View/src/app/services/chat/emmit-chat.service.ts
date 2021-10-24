import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmmitChatService {


  invocationChat = new EventEmitter();
  

  constructor() { }

  onChatListen(data:any){
    this.invocationChat.emit(data);
  }

}
