import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/user/contact';
import { User } from 'src/app/models/user/user';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder} from '@angular/forms';
import { AddContactService } from '../../services/add-contact.service'
import { EmmitChatService } from 'src/app/services/chat/emmit-chat.service';

@Component({
  selector: 'app-card-user-followed',
  templateUrl: './card-user-followed.component.html',
  styleUrls: ['./card-user-followed.component.css']
})
export class CardUserFollowedComponent implements OnInit {

  // @Output() userO = new EventEmitter<User>();
  @Input() userOf: Contact;
  @Input() userO: User;
  userReceive:User;
  isCompany: boolean = false;
  contactForm: FormGroup; 
  userForm: FormGroup;
  userForm2: FormGroup;

  constructor(public formBuilder: FormBuilder, private contactService: AddContactService, private emmitChatService:EmmitChatService) { }


  setIsCompany(){
      this.isCompany = true;
  }

  deleteContact(){
    console.log(this.userOf.cuenta+"  asdf  "+this.userOf.cuenta_contacto);
    this.contactForm = this.formBuilder.group({
      cuenta: this.userOf.cuenta,
      cuenta_contacto: this.userOf.cuenta_contacto
    })
    this.contactService.deleteContact(this.contactForm.value).subscribe(

    );
   window.location.reload();
  }

  activateChat(){
    this.userForm2 = this.formBuilder.group({
      id_cuenta: this.userOf.cuenta_contacto
    })
    this.contactService.getUnitUser(this.userForm2.value).subscribe(
      response => {
        this.userReceive = response;
        console.log('hola asdfasf       asd   '+this.userReceive.user)
        let data = {
          cuenta_dos: this.userO.user,
          cuenta_uno: this.userReceive.user
        }
        this.emmitChatService.onChatListen(data);
          }
    )

  }


  ngOnInit(): void {
    this.setIsCompany();
  }


}
