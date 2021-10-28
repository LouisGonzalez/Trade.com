import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/find-members.mode';
import { AffiliatesService } from '../../services/affiliates.service';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmmitChatService } from 'src/app/services/chat/emmit-chat.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  searchInput:string;
  arraySearch:User[];
  memberForm: FormGroup;
  @Input() localUser: any;

  @Input() userO: any;
  @Input() userOf: User;
  isCompany: boolean = false;
  cuenta_d: any;
  


  constructor(private emmitChatService:EmmitChatService, private _router:Router,private affiliateService: AffiliatesService, public formBuilder: FormBuilder) { 
    this.searchInput = "";
  }

  myFunction(){
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  funcionClick(idUsuario:any){
    // console.log("Buss:",this.localUser,", usuario:",idUsuario);
    // this.createMember(idUsuario);
    this.cuenta_d = idUsuario;
    this.activateChat();
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
    this.memberForm = this.formBuilder.group({
      id_cuenta_empresarial: this.localUser,     //ESTE DATO DEBE SER CAMBIADO A DINAMICO
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
    this.affiliateService.getUsers().subscribe(
      response => {
        this.arraySearch = response.Users;
        for(let i = 0; i < this.arraySearch.length; i++){
          if(this.arraySearch[i].StandardAccount == null){
            this.arraySearch.splice(i,1);
            i--;
          }
        }
      }
    )
  }

  activateChat(){
    console.log('adfa');
    let data = {
      cuenta_dos: this.userO,
      // cuenta_uno: this.userOf.user
      cuenta_uno: this.cuenta_d
    }
    console.log("Cu",data);
    this.emmitChatService.onChatListen(data);
    // this.chatH.hola();
  }

}
