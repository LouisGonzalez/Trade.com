import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';
import { io } from 'socket.io-client';
import { ComponentFactoryResolver, ElementRef, ViewContainerRef } from '@angular/core';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  socket:any;
  message:string;

  constructor() { 
    this.message = "";
  }

  @Input() username: string;
  @Input() username2: string;

  ngOnInit(): void {
    this.setupSocketConnection();
    this.newUser();
  }

  newUser(){
    this.socket.emit('new user', this.username2);
  }


  setupSocketConnection(){
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('whisper', (data:any) => {
      if(data){
        const element = document.createElement('div');
        element.innerHTML = "<b>"+data.nick+"</b>" + ": " + data.data+"<br>";
        element.style.padding = '6px 10px';
        element.style.borderRadius = '6px 0 6px 0';
        element.style.position = 'relative';
        element.style.fontSize = '12px';
        element.style.margin = '0 0 15px';
        if(data.nick == "yo"){
          element.style.color = '#30649c';
          element.style.background = 'rgba(0, 114, 135, .1)';
          element.style.alignSelf = 'flex-start';
          element.style.border = 'rgba(0, 114, 135, .1)';
          element.style.textAlign = 'left';
        } else {
          element.style.textAlign = 'right';
          element.style.color = "#6c6c6c";
          element.style.background = 'rgba(100, 170, 0, .1)';
          element.style.border = 'rgba(100, 170, 0, .1)';
        }
        document.getElementById('messages-container2')?.appendChild(element);
      }
    })
  }

  addMessage(){
    this.socket.emit('send message', this.message, this.username2, this.username, '0');
    this.message = "";
  }

}
