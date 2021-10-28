import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {

  modAddCard:boolean = false;
  modWallet:boolean = true;
  modTransfer:boolean = false;

  USER: User = new User();

  constructor(private sessionUserService: SessionUserService) { }

  activateAddCard(){
    this.modAddCard = true;
    this.modWallet = false;
    this.modTransfer = false;
  }

  activateWallet(){
    this.modAddCard = false;
    this.modWallet = true;
    this.modTransfer = false;
  }

  activateTransfer(){
    this.modAddCard = false;
    this.modWallet = false;
    this.modTransfer = true;
  }

  getUser(){
    this.sessionUserService.getUser().subscribe(
      res => {
        this.USER = res;
      }
    );
  }

  ngOnInit(): void {
    this.getUser();
  }

}
