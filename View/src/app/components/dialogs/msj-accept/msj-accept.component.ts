import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface modelMsj {
  data: {
    msj: '',
    title: '',
  }
}

@Component({
  selector: 'app-msj-accept',
  templateUrl: './msj-accept.component.html',
  styleUrls: ['./msj-accept.component.css']
})
export class MsjAcceptComponent implements OnInit {

  // title: string = "";
  // data: any = ``;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: modelMsj) { 
    
  }

  ngOnInit(): void {
    // console.log(this.data.data.msj);
  }

}
