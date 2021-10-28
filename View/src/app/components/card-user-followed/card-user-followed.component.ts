import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/user/contact';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-card-user-followed',
  templateUrl: './card-user-followed.component.html',
  styleUrls: ['./card-user-followed.component.css']
})
export class CardUserFollowedComponent implements OnInit {

  // @Output() userO = new EventEmitter<User>();
  @Input() userOf: Contact;
  isCompany: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setIsCompany();
  }

  setIsCompany(){
      this.isCompany = true;
  }

}
