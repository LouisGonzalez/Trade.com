import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/find-members.mode';
import { AffiliatesService } from '../../services/affiliates.service';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessClass } from 'src/app/models/business.model';


@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.css']
})
export class AffiliatesComponent implements OnInit {

  searchInput:string;
  arraySearch: Array<User> = [];
  memberForm: FormGroup;
  businessForm: FormGroup;
  businessAccount: BusinessClass;
  @Input() localUser: string;
  


  constructor(private _router:Router,private affiliateService: AffiliatesService, public formBuilder: FormBuilder) { 
    this.searchInput = "";
  }

  myFunction(){
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  funcionClick(idUsuario:any){
    // console.log("Buss:",this.localUser,", usuario:",idUsuario);
     this.createMember(idUsuario);
  }

  filterFunction(){
    const input = (<HTMLInputElement>document.getElementById('myInput'));
    const filter = input.value.toUpperCase();
    const div = document.getElementById('myDropdown');
    const a = document.getElementsByTagName('a');
    for(let i = 0; i < a.length; i++){
      const txtValue = a[i].textContent || a[i].innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1){
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  createMember(idUsuario:any){
    this.businessForm = this.formBuilder.group({
      cuenta_general: this.localUser
    })
    this.affiliateService.getIdBusiness(this.businessForm.value).subscribe(
      response => {
        this.businessAccount = response.Business;
      }
    )

    this.memberForm = this.formBuilder.group({
//      id_cuenta_empresarial: this.businessAccount.id_cuenta,     //ESTE DATO DEBE SER CAMBIADO A DINAMICO
      id_cuenta_empresarial: 1,     //ESTE DATO DEBE SER CAMBIADO A DINAMICO
      id_usuario: idUsuario       
    })
    this.affiliateService.createMember(this.memberForm.value).subscribe(
      response => {
       // console.log(data);
        console.log(response);
//        this._router.n        AQUI POR SI SE REDIRIGE HACIA ALGUN LADO
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    // console.log(this.arraySearch.length);
    // let v = this.arraySearch.length;
    this.affiliateService.getUsers().subscribe(
      response => {
        console.log("d",response);
        this.arraySearch = response.Users;
        for(let i = 0; i < this.arraySearch.length; i++){
          if(this.arraySearch[i].StandardAccount == null){
            this.arraySearch.splice(i,1);
            i--;
          }
        }
      },
      error => {
        console.error(error);
      }
    );
  }

}
