import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/models/post/post';
import { Service } from 'src/app/models/products/service';
// import { Product } from 'src/app/models/products/product';
import { ArticlesService } from 'src/app/services/products/articles.service';
import { ProductCartService } from 'src/app/services/shopping/product-cart.service';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  displayedColumns: string[] = ['titulo', 'tipo_servicio', 'fecha_publicacion', 'costo', 'divisa', 'intercambio', 'activo', 'invisible', 'button1'];


  listServices: Array<Service> = [];
  dataSource: MatTableDataSource<Service>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // listaCart: Array<ProductCart> = [];
  total: any = 0;
  despleged: boolean = true;
  USER: User;

  constructor(private articleSevice: ArticlesService, 
    private productCartSevice: ProductCartService,
    private sessionUserService: SessionUserService,
    public dialog: MatDialog) {
        this.dataSource = new MatTableDataSource(this.listServices);
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
    this.articleSevice.getAllMyServices({cuenta: id_cuenta}).subscribe(
      res => {
        this.listServices = res.MyServices;
        console.log(this.listServices);
        this.dataSource = new MatTableDataSource(this.listServices);
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
