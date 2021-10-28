import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user';
import { CardService } from 'src/app/services/wallet/card.service';
import { MsjAcceptComponent } from '../../dialogs/msj-accept/msj-accept.component';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  seccionSelect: number = 1;
  @Input() USER: User;
  formCard : FormGroup=new FormGroup({
    user: new FormControl(null,Validators.required),
    fecha_corte: new FormControl(null,Validators.required),
    codigo_seguridad: new FormControl(null, Validators.required),
    tarjeta: new FormControl(null,Validators.required)
  });

  constructor(public dialog: MatDialog, private cardSevice: CardService) { }

  ngOnInit(): void {
    this.formCard.get('user')?.setValue(this.USER.id_cuenta);
  }

  setSeccionSelect(i:number){
    this.seccionSelect = i;
  }

  createCard(){
    if(this.formCard.valid){
      return;
    }
    // console.log(this.formCard.value);
    this.cardSevice.postAddCard(this.formCard.value).subscribe(
      res => {
        if(res.message!=undefined){
          this.openMsjDialog(res.message,"Errro: Add Credit");
        }else{
          this.openMsjDialog("Credit Card Accepted","Add Credit Accepted");
        }
      },
      error => {

      }
    );
  }

  openMsjDialog(text: string, title: string){
    this.dialog.open(MsjAcceptComponent, {
      data: { 
        data: {
          msj: text,
          title: title
        }
      }
    });
  }

}
