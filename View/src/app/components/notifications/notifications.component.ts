import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  socket:any;
  totalNotify:any;

  constructor() { }

  recibeAlert(){

  }

  setupSocketConnection(){
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('send notifications', (data:any) => {

    })
  }

  desplegate(){
    console.log("hola mundo");
    document.getElementById("myDropdown")?.classList.toggle("show");
    this.totalNotify = 0;
  }

  ngOnInit(): void {
    this.totalNotify = 1236;
  }


}
