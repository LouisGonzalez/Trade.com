import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-card-user-followed',
  templateUrl: './card-user-followed.component.html',
  styleUrls: ['./card-user-followed.component.css']
})
export class CardUserFollowedComponent implements OnInit {

  @Output() userO = new EventEmitter<User>();
  @Input() userOf: User;
  isCompany: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setIsCompany();
  }

  setIsCompany(){
    if(this.userOf.BusinessAccount!=undefined){
      this.isCompany = true;
    }
  }

}
