import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Post } from 'src/app/models/post/post';
import { User } from 'src/app/models/user/user';
import { ProductCart } from 'src/app/models/shopping/product-cart';
import  { AddContactService } from '../../services/add-contact.service'

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {

  @Input() product: Post = new Post();
  @Output() mycart = new EventEmitter<ProductCart>();
  userForm: FormGroup;
  userPost: User;

  cantidadForm: FormGroup = new FormGroup({
    cantidad: new FormControl(1,Validators.required),
  });

  constructor(public formBuilder: FormBuilder, private contactService: AddContactService) { }

  ngOnInit(): void {
    this.seeProfile();
  }

  prueba(){
    console.log("hola mundo");
  }

  seeProfile(){
    this.userForm = this.formBuilder.group({
      id_cuenta: this.product.cuenta
    })
    this.contactService.getUnitUser(this.userForm.value).subscribe(
      response => {
        this.userPost = response;
      }
    )
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
        costo: this.product.costo
      }
    );
  }



}
