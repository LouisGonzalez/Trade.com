import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    // this._user.logout()
    // .subscribe(
    //   data=>{console.log(data);this._router.navigate(['/login'])},
    //   error=>console.error(error)
    // )
  }

}
