import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { NotificationsService } from '../../services/notifications.service';
import { Notifications } from '../../models/notifications.model';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder} from '@angular/forms';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  socket:any;
  totalNotify:any;
  userForm: FormGroup;
  updateForm: FormGroup;
  arraySearch:Notifications[];

  constructor(private notifyService: NotificationsService,public formBuilder: FormBuilder) { }

  recibeAlert(){

  }

  setupSocketConnection(){
    this.socket = io(SOCKET_ENDPOINT);
    this.newUser();
    this.recibeNotifications();

  }

  recibeNotifications(){
    console.log('daf');
    this.socket.on('send notifications');
    this.getNotifyFromDB();
  }

  getNotifyFromDB(){
    this.userForm = this.formBuilder.group({
      usuario_recibe: 1234       //MODIFICAR PARA QUE SEA DINAMICO
    })
    this.notifyService.getMyNotifications(this.userForm.value).subscribe(
      response => {
        this.arraySearch = response.Notify;
        this.totalNotify = this.arraySearch.length;
        // console.log('arr',this.arraySearch.length);
      },
      error => {
        console.log('error:',error);
      }
    )
  }

  desplegate(){
    document.getElementById("myDropdown-notify")?.classList.toggle("show");
    //cambia las notificaciones de este usuario dentro de la base de datos a FALSE
    this.updateForm = this.formBuilder.group({
      id: 1234               //MODIFICAR PARA QUE SEA DINAMICO
    })
    this.notifyService.updateViewNotify(this.updateForm.value).subscribe(
      response => {
        this.totalNotify = 0;
        console.log('regresa',response);
      },
      error => {
        console.log(error);
      }
    )
  }



  functionClick(){
    console.log('existiendo...');
  }

  ngOnInit(): void {
    this.setupSocketConnection();
  }


  newUser(){
    this.socket.emit('new user', 'Yeferal');
  }

}
