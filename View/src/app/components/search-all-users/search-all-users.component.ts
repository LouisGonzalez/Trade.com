import { Component, OnInit } from '@angular/core';
import { SearchAllUsersService } from '../../services/search-all-users.service';
import { User} from '../../models/user/user';

@Component({
  selector: 'app-search-all-users',
  templateUrl: './search-all-users.component.html',
  styleUrls: ['./search-all-users.component.css']
})

export class SearchAllUsersComponent implements OnInit {

  searchInput:string;
  arraySearch:User[];

  constructor(private searchService: SearchAllUsersService) { 
    this.searchInput="";
  }

  myFunction(){
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  functionClick(){
    console.log('existiendo...');
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
