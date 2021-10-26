import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { ArticlesService } from 'src/app/services/products/articles.service';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

  listProducts: Array<Post> = [];

  despleged: boolean = false;

  constructor(private articleSevice: ArticlesService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts(){
    this.articleSevice.getAllProducts().subscribe(
      res => {
        this.listProducts = res;
        console.log(this.listProducts);
      },
      error => {
        console.log(error);
      }
    );
  }

  setDespleged(){
    if(this.despleged){
      this.despleged = false;
    }else{
      this.despleged = true;
    }
  }

}
