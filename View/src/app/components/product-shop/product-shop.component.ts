import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post/post';
import { ProductCart } from 'src/app/models/shopping/product-cart';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {

  @Input() product: Post = new Post();
  @Output() mycart = new EventEmitter<ProductCart>();

  cantidadForm: FormGroup = new FormGroup({
    cantidad: new FormControl(1,Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  setCart(){
    if(!this.cantidadForm.valid){
      return;
    }
    this.mycart.emit(
      {
        id: this.product.Article?.id,
        cantidad: this.cantidadForm.get('cantidad')?.value,
        divisa: this.product.divisa,
        precio: 55
      }
    );
  }



}
