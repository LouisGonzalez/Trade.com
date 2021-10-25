import { Component, Input, OnInit } from '@angular/core';
import { SearchAllUsersService } from '../../services/search-all-users.service';
import { User } from '../../models/find-members.mode';
import { AffiliatesService } from '../../services/affiliates.service';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmmitChatService } from 'src/app/services/chat/emmit-chat.service';

@Component({
  selector: 'app-search-all-users',
  templateUrl: './search-all-users.component.html',
  styleUrls: ['./search-all-users.component.css']
})

export class SearchAllUsersComponent implements OnInit {

  searchInput:string;
  arraySearch:User[];

  @Input() localUser: any;

  @Input() userO: any;
  @Input() userOf: User;
  isCompany: boolean = false;
  cuenta_d: any;

  constructor(private searchService: SearchAllUsersService, private emmitChatService:EmmitChatService, private _router:Router,private affiliateService: AffiliatesService, public formBuilder: FormBuilder) { 
    this.searchInput="";
  }

  myFunction(){
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  functionClick(){
    console.log('existiendo...',this.userO);
    this._router.navigate(['/home-user/users/profile2/:user']);
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



  ngOnInit(): void {
    this.searchService.getAllUsers().subscribe(
      response => {
        this.arraySearch = response.Account;  
      }
    )
  }

}
