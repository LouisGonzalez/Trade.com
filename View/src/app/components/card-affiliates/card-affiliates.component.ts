import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Afiliate } from 'src/app/models/user/afiliate';
import { User } from 'src/app/models/user/user';
import { AffiliatesService } from 'src/app/services/affiliates.service';

@Component({
  selector: 'app-card-affiliates',
  templateUrl: './card-affiliates.component.html',
  styleUrls: ['./card-affiliates.component.css']
})
export class CardAffiliatesComponent implements OnInit {

  @Output() userO = new EventEmitter<User>();
  @Input() userOf: Afiliate;
  @Input() id_cuenta_empresarial: any;
  isCompany: boolean = false;
  isAffiliate: boolean = false;

  constructor(private affiliateService: AffiliatesService) { }

  ngOnInit(): void {
    this.setIsCompany();
  }

  setIsCompany(){
    // if(this.userOf.BusinessAccount!=undefined){
      this.isCompany = true;
    // }
  }

  setAffiliate(){
    let data = {
      id_cuenta_empresarial: this.id_cuenta_empresarial,
      id_usuario: this.userOf.StandardAccount.id_cuenta
    }
    this.affiliateService.createMember(data).subscribe(
      res =>{
        console.log(res);
        this.isAffiliate = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  rmAffiliate(){
    let data = {
      id_cuenta_empresarial: this.id_cuenta_empresarial,
      id_usuario: this.userOf.StandardAccount.id_cuenta
    }
    console.log(data);
    this.affiliateService.deleteMember(data).subscribe(
      res =>{
        console.log(res);
        this.isAffiliate = true;
      },
      error => {
        console.log(error);
      }
    );
  }

}
