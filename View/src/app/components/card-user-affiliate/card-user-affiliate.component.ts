import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-card-user-affiliate',
  templateUrl: './card-user-affiliate.component.html',
  styleUrls: ['./card-user-affiliate.component.css']
})
export class CardUserAffiliateComponent implements OnInit {

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
