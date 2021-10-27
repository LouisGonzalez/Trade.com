import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { ProductCart } from 'src/app/models/shopping/product-cart';
import { ArticlesService } from 'src/app/services/products/articles.service';
import { ProductCartService } from 'src/app/services/shopping/product-cart.service';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  listProducts: Array<Post> = [];
  listaCart: Array<ProductCart> = [];
  total: any = 0;
  despleged: boolean = true;

  constructor(private articleSevice: ArticlesService, private productCartSevice: ProductCartService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getCartAll();
  }


  getAllProducts(){
    this.articleSevice.getAllProducts().subscribe(
      res => {
        this.listProducts = res;
        // console.log(this.listProducts);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCartAll(){
    this.productCartSevice.getCartAll().subscribe(
      res =>{
        // console.log('cart',res);
        this.listaCart = [];
        this.listaCart = res;
        this.getTotalCart();
      },
      error => {
        console.log(error);
      }
    );
  }

  getTotalCart(){
    this.productCartSevice.getTotalCart().subscribe(
      res =>{
        this.total = res;
        console.log('total:',this.total)
      },
      error => {
        console.log(error);
      }
    );
  }

  postCart(event: any){
    console.log(event);
    this.productCartSevice.postCart(event).subscribe(
      res =>{
        console.log(res);
        this.getCartAll();
      },
      error => {
        console.log(error);
      }
    );
    // this.getCartAll();
  }

  deleteCart(event:any){
    console.log(event);
    this.getCartAll();
  }

  setDespleged(){
    if(this.despleged){
      this.despleged = false;
    }else{
      this.getCartAll();
      this.despleged = true;
    }
    
  }

  cleanCart(){
    this.productCartSevice.deleteCartAll().subscribe(
      res =>{
        console.log('borro todo:',res);
        this.getCartAll();
      },
      error => {
        console.log(error);
      }
    );
  }

  payShop(){

  }

}
