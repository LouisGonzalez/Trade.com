import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { ArticlesService } from 'src/app/services/products/articles.service';

@Component({
  selector: 'app-shop-services',
  templateUrl: './shop-services.component.html',
  styleUrls: ['./shop-services.component.css']
})
export class ShopServicesComponent implements OnInit {

  listServices: Array<Post> = [];

  constructor(private articleSevice: ArticlesService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts(){
    this.articleSevice.getAllServices().subscribe(
      res => {
        this.listServices = res;
        console.log(this.listServices);
      },
      error => {
        console.log(error);
      }
    );
  }

}
