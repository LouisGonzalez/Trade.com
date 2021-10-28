import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post';

@Component({
  selector: 'app-service-shop',
  templateUrl: './service-shop.component.html',
  styleUrls: ['./service-shop.component.css']
})
export class ServiceShopComponent implements OnInit {

  @Input() service: Post = new Post();

  constructor() { }

  ngOnInit(): void {
  }

}
