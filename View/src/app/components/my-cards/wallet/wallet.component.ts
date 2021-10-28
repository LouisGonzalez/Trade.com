import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/models/wallet/card';
import { CardService } from 'src/app/services/wallet/card.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Wallet } from 'src/app/models/wallet/wallet';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddCreditComponent } from '../../dialogs/modal-add-credit/modal-add-credit.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['no_tarjeta', 'fecha_corte', 'state', 'button1', 'button2'];
  displayedColumnsWll: string[] = ['monto', 'divisa', 'button'];

  listCards: Array<Card> = [];
  listWll: Array<Wallet> = [];

  dataSource: MatTableDataSource<Card>;
  dataSourceWll: MatTableDataSource<Wallet>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cardService: CardService, private walletService: WalletService,public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource(this.listCards);
    this.dataSourceWll = new MatTableDataSource(this.listWll);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }


  getAllCards(){
    // console.log('entro');
    this.cardService.getMyCards().subscribe(
      res => {
        this.listCards = res;
        this.dataSource = new MatTableDataSource(this.listCards);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }

  getMyWallet(){
    // console.log('entro');
    this.walletService.getMyWallet().subscribe(
      res => {
        // this.listCards = res;
        console.log(res);
        this.listWll = [res];
        this.dataSourceWll = new MatTableDataSource(this.listWll);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }

  getWallet(){
    // console.log('entro');
    this.cardService.getMyCards().subscribe(
      res => {
        this.listCards = res;
        this.dataSource = new MatTableDataSource(this.listCards);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCard(row:any){
    console.log(row);
    this.cardService.deleteCards(row.no_tarjeta).subscribe(
      res => {
        console.log("Descativo",res);
        this.getAllCards();
      },
      error => {
        console.log(error);
      }
    );
  }

  addCredit(row:any){
    // console.log(row);
    
    // this.dialog.open(ModalAddCreditComponent,{
    //   data: row
    // });
  }

  addCreditCard(row:any){
    console.log(row);
    
    this.dialog.open(ModalAddCreditComponent,{
      data: row
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getAllCards();
    this.getMyWallet();
    this.ngAfterViewInit();
    
  }

}
