import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/wallet/card.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(private cardService: CardService) { }


  getAllCards(){
    // this.cardService.getCards
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  ngOnInit(): void {
  }

}
