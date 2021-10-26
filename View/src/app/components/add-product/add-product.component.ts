import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/products/articles.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChargedComponent } from '../dialogs/charged/charged.component';
import { MsjAcceptComponent } from '../dialogs/msj-accept/msj-accept.component';

export interface modelMsj {
  data: {
    msj: '',
    title: '',
  }
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  stockInitial: any = 0;
  stockMin: any = 0;
  intercambiable:boolean = false;
  visible:boolean = true;

  postForm : FormGroup=new FormGroup({
    titulo: new FormControl(null,Validators.required),
    costo: new FormControl(null,Validators.required),
    divisa: new FormControl('USD',null),
    // divisa: new FormControl('USD',Validators.required),
    intercambio: new FormControl(null,Validators.required),
    descripcion: new FormControl(null,Validators.required),
    invisible: new FormControl(null,Validators.required),
    stock: new FormControl(null,Validators.required),
    minimo_stock: new FormControl(null,Validators.required),
  });

  constructor(public dialog: MatDialog, 
    private _router:Router, public articleService: ArticlesService) { }

  ngOnInit(): void {
  }

  setIntercambiable(data: boolean){
    this.intercambiable = data;
    this.postForm.get('intercambio')?.setValue(this.intercambiable);
  }
  
  setVisible(data: boolean){
    this.visible = !data;
    this.postForm.get('invisible')?.setValue(this.visible);
  }

  seStock(){
    this.stockInitial = this.postForm.get('stock')?.value;
  }

  seStockMin(){
    this.stockMin = this.postForm.get('minimo_stock')?.value;
  }

  sendPost(){
    
    if(!this.postForm.valid){
      console.log(this.postForm.valid);
      console.log(this.postForm.value)
      // this.openDialog();
      return ;
    }
    console.log(this.postForm.value)
    this.articleService.postProduct(this.postForm.value).subscribe(
      res => {
        // this.reloadPage();
        this.openDialog2("The Item Has Been Entered Correctly","Post Product or Article");
        // this._router.navigate(['/home-user/my-posts/post-product']);
        
        
      },
      error => {
        this.openDialog2("An Error Occurred While Entering Your Article","Post Product or Article");
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

  reloadPage(){
    window.location.reload();
  }

}

