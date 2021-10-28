import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { Product } from 'src/app/models/products/product';
import { ProductCart } from 'src/app/models/shopping/product-cart';
import { ArticlesService } from 'src/app/services/products/articles.service';
import { ProductCartService } from 'src/app/services/shopping/product-cart.service';

@Component({
  selector: 'app-card-cart-product',
  templateUrl: './card-cart-product.component.html',
  styleUrls: ['./card-cart-product.component.css']
})
export class CardCartProductComponent implements OnInit {

  @Input() productCart: ProductCart = new ProductCart();
  @Input() index: number;
  @Output() mycart = new EventEmitter<ProductCart>();
  product: Post = new Post();

  constructor(private articlesService: ArticlesService, private productCartSevice: ProductCartService) { }

  ngOnInit(): void {
    // console.log('p',this.productCart);
    this.getPost();
  }

  getPost(){
    this.articlesService.getOneProduct(this.productCart.id).subscribe(
      res => {
        // console.log('k',res);
        this.product = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  removeCart(){
    this.productCartSevice.deleteCart(this.productCart.id).subscribe(
      res => {
        this.mycart.emit(this.productCart);
      },
      error => {
        this.mycart.emit(this.productCart);
        console.log(error);
      }
    );
  }


}
