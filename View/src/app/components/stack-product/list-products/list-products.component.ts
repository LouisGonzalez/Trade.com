import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/models/post/post';
import { Product } from 'src/app/models/products/product';
import { ArticlesService } from 'src/app/services/products/articles.service';
import { ProductCartService } from 'src/app/services/shopping/product-cart.service';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'fecha_publicacion', 'costo', 'divisa', 'intercambio', 'activo', 'invisible', 'minimo_stock', 'stock', 'button1'];

  listProducts: Array<Product> = [];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // listaCart: Array<ProductCart> = [];
  total: any = 0;
  despleged: boolean = true;
  USER: User;

  constructor(private articleSevice: ArticlesService, 
    private sessionUserService: SessionUserService,
    private productCartSevice: ProductCartService,
    public dialog: MatDialog) {
        this.dataSource = new MatTableDataSource(this.listProducts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
     }

    
  ngOnInit(): void {
    this.getUser();
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllMyProducts(id_cuenta: any){
    this.articleSevice.getAllMyProducts({cuenta: id_cuenta}).subscribe(
      res => {
        this.listProducts = res.MyArticles;
        console.log(this.listProducts);
        this.dataSource = new MatTableDataSource(this.listProducts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(row: any){
    console.log('re',row.id_post);
    this.dialog.open(EditProductComponent, {
      data: row.id_post
    });
  }

  getUser(){
    this.sessionUserService.getUser().subscribe(
      res => {
        this.USER = res;
        this.getAllMyProducts(this.USER.id_cuenta);
      },
      error => {

      }
    );
  }

}
