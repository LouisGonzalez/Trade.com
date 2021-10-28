import { Component, OnInit } from '@angular/core';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-charged',
  templateUrl: './charged.component.html',
  styleUrls: ['./charged.component.css']
})
export class ChargedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
