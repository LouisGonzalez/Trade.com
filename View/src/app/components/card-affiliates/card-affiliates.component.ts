import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-card-affiliates',
  templateUrl: './card-affiliates.component.html',
  styleUrls: ['./card-affiliates.component.css']
})
export class CardAffiliatesComponent implements OnInit {

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
