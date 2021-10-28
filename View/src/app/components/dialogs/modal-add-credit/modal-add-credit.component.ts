import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/models/wallet/card';
import { Wallet } from 'src/app/models/wallet/wallet';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { MsjAcceptComponent } from '../msj-accept/msj-accept.component';

@Component({
  selector: 'app-modal-add-credit',
  templateUrl: './modal-add-credit.component.html',
  styleUrls: ['./modal-add-credit.component.css']
})
export class ModalAddCreditComponent implements OnInit {

  public montoForm : FormGroup=new FormGroup({
    monto: new FormControl(null,Validators.required)
  });
  msj: string = "";
  wallet: Wallet;
  // private addContactService: AddContactService;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Card, 
  private walletService: WalletService,
  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getWallet();
  }

  addCredit(){
    
    if(!this.montoForm.valid){
      // console.log('mg',this.data.divisa);
      return;
    }
    // console.log(this.data);
    let info = {
      monto: this.montoForm.get('monto')?.value,
      divisa: this.wallet.divisa,
      tarjeta: this.data.no_tarjeta
    };
    this.walletService.postAddCreditWll(info).subscribe(
      res => {
        console.log(res);
        this.openDialog2("Add Credit of the Wallet",res.message);
      },
      error => {
        console.log(error);
      }
    );
  }

  getWallet(){
    this.walletService.getMyWallet().subscribe(
      res => {
        this.wallet = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialog2(data: string, title: string) {
    this.dialog.open(MsjAcceptComponent, {
      data: { 
        data: {
          msj: data,
          title: title
        }
      }
    });
  }

}
