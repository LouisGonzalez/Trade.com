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
    this.recibeNotifications();
  }

  recibeNotifications(){
    this.socket.on('send notifications');
    this.getNotifyFromDB();
  }

  getNotifyFromDB(){
    this.userForm = this.formBuilder.group({
      usuario_recibe: 1       //MODIFICAR PARA QUE SEA DINAMICO
    })
    this.notifyService.getMyNotifications(this.userForm.value).subscribe(
      response => {
        this.arraySearch = response.Notify;
        this.totalNotify = this.arraySearch.length;
      }
    )
  }

  desplegate(){
    document.getElementById("myDropdown")?.classList.toggle("show");
    //cambia las notificaciones de este usuario dentro de la base de datos a FALSE
    this.updateForm = this.formBuilder.group({
      id: 1               //MODIFICAR PARA QUE SEA DINAMICO
    })
    this.notifyService.updateViewNotify(this.updateForm.value).subscribe(
      response => {
        console.log(response);
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


}
