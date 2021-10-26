import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {

  @Input() product: Post = new Post();

  constructor() { }

  ngOnInit(): void {
    
  }

}
