import { Component, OnInit, ViewChild } from '@angular/core';
import { any } from 'sequelize/types/lib/operators';
import { ComponentFactoryResolver, ElementRef, ViewContainerRef } from '@angular/core'; 
import { ArticleFoundComponent } from './article-found/article-found.component';
import { ProductSearchService } from '../../services/product-search.service';
import { Post } from '../../models/product-search.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchInput:string;
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
 
  arraySearch:Post[];  

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private searchService: ProductSearchService) {
    this.searchInput = "";
  }

  myFunction(){
    document.getElementById("myDropdown")?.classList.toggle("show");
  }  

  redireccion(){
    console.log('hola mundo');
  }

  filterFunction(){
    const input = (<HTMLInputElement>document.getElementById('myInput'));

/*
    const element = document.createElement('div');
    const as = document.createElement('a');
    as.setAttribute('href', "http://google.com");
    as.innerHTML = "asdfasdf";
    as.style.color = 'black';
    element.style.padding = '12px 16px';
    as.style.textDecoration = 'none';
    element.style.display = 'block';
    element.appendChild(as);
    document.getElementById('myDropdown')?.appendChild(element);
  */  

    const filter = input.value.toUpperCase();
    const div = document.getElementById('myDropdown');
    const a = document.getElementsByTagName('a');
    for(let i = 0; i < a.length; i++){
      const txtValue = a[i].textContent || a[i].innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1){
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  ngOnInit(): void {
    this.searchService.getPost().subscribe(
      response => {
        this.arraySearch = response.post;
      }
    );
  }


}




/*  CODIGO QUE PUEDE SERVIR
<input (keyup)="searchData($event)" type="text" class="form-control" placeholder="Search"
          aria-label="Searchbox" aria-describedby="basic-addon1">

          */