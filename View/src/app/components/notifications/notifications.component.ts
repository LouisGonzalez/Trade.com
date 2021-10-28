import { Component, Input, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { NotificationsService } from '../../services/notifications.service';
import { Notifications } from '../../models/notifications.model';
import { User } from '../../models/find-members.mode';
import { User as MyUser } from '../../models/user/user';
import { AffiliatesService } from '../../services/affiliates.service';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmmitChatService } from 'src/app/services/chat/emmit-chat.service';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import { GLOBAL } from 'src/app/services/global';

const SOCKET_ENDPOINT = GLOBAL.URL;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  socket:any;
  totalNotify:any;
  userForm: FormGroup;
  userForm2: FormGroup;
  updateForm: FormGroup;
  arraySearch:Notifications[];
  @Input() localUser: MyUser;
  @Input() userO: any;
  userLog: MyUser = new MyUser();
  // @Input() userOf: User;

  constructor(private notifyService: NotificationsService,public formBuilder: FormBuilder, private emmitChatService:EmmitChatService, private _router:Router,public sessionUserService: SessionUserService) { }

  recibeAlert(){

  }

setupSocketConnection(){
    this.socket = io(SOCKET_ENDPOINT);
    //this.newUser();
    this.recibeNotifications();
  }

  recibeNotifications(){
    this.socket.on('send notifications');
    this.getNotifyFromDB();
  }

  getNotifyFromDB(){
    this.userForm = this.formBuilder.group({
      usuario_recibe: this.userLog.id_cuenta       //MODIFICAR PARA QUE SEA DINAMICO
    })
    this.notifyService.getMyNotifications(this.userForm.value).subscribe(
      response => {
        this.arraySearch = response.Notify;
        this.totalNotify = this.arraySearch.length;
        console.log('arr',response);
      },
      error => {
        console.log('error:',error);
      }
    )
  }

  //muestra todas las notificaciones (leidas/no leidas)
  getAllNotifysFromDb(){
    this.userForm2 = this.formBuilder.group({
      usuario_recibe: this.userLog.id_cuenta
    })
    this.notifyService.getAllNotifications(this.userForm2.value).subscribe(
      response => {
        this.arraySearch = response.Notify;
        console.log('arr',response);
      },
      error => {
        console.log('error: ',error);
      }
    )
  }

  activateChat(username:any){
    console.log('adfa');
    let data = {
      cuenta_dos: this.localUser.user,
      cuenta_uno: username
      // cuenta_uno: 'Yeferal'
    }
    this.emmitChatService.onChatListen(data);
    // this.chatH.hola();
  }




  desplegate(){
    document.getElementById("myDropdown-notify")?.classList.toggle("show");
    //cambia las notificaciones de este usuario dentro de la base de datos a FALSE
    this.updateForm = this.formBuilder.group({
      id: this.userO               //MODIFICAR PARA QUE SEA DINAMICO
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

  desplegate2(){
    document.getElementById("myDropdown-notify")?.classList.toggle("show");
    this.getAllNotifysFromDb();
  }

  desplegateN(){
    //Para desplegar todo
  }

  newUser(){
    this.socket.emit('new user', this.localUser);
  }

  functionClick(username:any){
    console.log(username+'    asfasfsda');
    this.activateChat(username);
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.sessionUserService.getUser().subscribe(
      res => {
        this.userLog = res;
        this.setupSocketConnection();
      },
      error => {
        console.error();
      }
      
    );
  }



}
