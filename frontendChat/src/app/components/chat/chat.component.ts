import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { ChatService } from '../../services/chat/chat.service';

import { FormGroup, NgForm } from '@angular/forms';

import { io } from "socket.io-client";;
import { ComponentFactoryResolver, ElementRef, ViewContainerRef } from '@angular/core'; 
import { SmsComponent } from './sms/sms.component';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  socket:any;
 
  message: string;
  user: string;
  username: string;
  username2: string;
 
  constructor(public chatService:ChatService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.message = "";
    this.user = "";
    this.username = "";
    this.username2 = "";
  }

  ngOnInit(){
    this.setupSocketConnection();

  }

  createChat2(){
   // this.newUser();
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(SmsComponent);
    const componentRef = this.container.createComponent(dynamicComponentFactory);
    componentRef.instance.username = this.username;
    componentRef.instance.username2 = this.username2;
    this.createChat();
  }


  //Por el momento hice un form temporal para definir el usuario, pero luego se debe poner este metodo dentro de ngOnInit() con el nickname del usuario logueado
  newUser(){
     this.socket.emit('new user', this.username2);
  }

  setupSocketConnection(){
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('whisper', (data:any) => {
      if(data){
        const element = document.createElement('div');
        element.innerHTML = "<b>"+data.nick+"</b>" + ": " + data.data+"<br>";
        element.style.marginTop = 'auto';
        element.style.margin = '10px';
        element.style.marginBottom = 'auto';
        element.style.marginLeft = '10px';
        element.style.borderRadius = '25px';
        if(data.nick == "yo" || data.nick == this.user){
          element.style.backgroundColor = '#78e08f';
          element.style.textAlign = 'left';
        } else {
          element.style.textAlign = 'right';
          element.style.backgroundColor = '#82ccdd';
        }
        element.style.position = 'right';
        element.style.padding =  '10px';
        document.getElementById('messages-container')?.appendChild(element);
      }
    })
  }

  addMessage2(){
    this.socket.emit('send message', this.message, this.user, 'sergio', '0');
    this.message = '';
  }

  createChat(){
    this.socket.emit('send history data', this.username2, this.username, '0');
  }
  
}
