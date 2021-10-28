import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/models/post/post';
import { ProductCart } from 'src/app/models/shopping/product-cart';
import { Card } from 'src/app/models/wallet/card';
import { Wallet } from 'src/app/models/wallet/wallet';
import { ArticlesService } from 'src/app/services/products/articles.service';
import { BuyService } from 'src/app/services/shopping/buy.service';
import { ProductCartService } from 'src/app/services/shopping/product-cart.service';
import { MsjAcceptComponent } from '../../dialogs/msj-accept/msj-accept.component';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'costo', 'cantidad', 'total', 'button1'];
  // @Input() productCart: ProductCart = new ProductCart();
  listCart: Array<ProductCart> = [];
  // listWll: Array<Wallet> = [];
  // @Output() mycart = new EventEmitter<ProductCart>();
  @Output() mycart = new EventEmitter<ProductCart>();
  listaCart: Array<ProductCart> = [];
  total: any = 0;

  dataSource: MatTableDataSource<ProductCart>;
  dataSourceWll: MatTableDataSource<Wallet>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articlesService: ArticlesService, 
    private productCartSevice: ProductCartService,
    private buyService: BuyService,
    public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource(this.listaCart);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async setCart(){
    
    for(let i = 0; i< this.listaCart.length; i++){
      console.log(this.listaCart[i]);
       this.listaCart[i].post = await this.getPost(this.listaCart[i].id);
      console.log(this.getPost(this.listaCart[i].id));
    }
    // console.log(this.listaCart);
    
    
  }

  getCartAll(){
    this.productCartSevice.getCartAll().subscribe(
      res =>{
        console.log('caret',res);
        this.listaCart = [];
        this.listaCart = res;
        
        console.log('ds',this.listaCart.length);
        this.getTotalCart();
        // this.setCart()
        for(let i = 0; i< this.listaCart.length; i++){
          this.articlesService.getOneProduct(this.listaCart[i].id).subscribe(
            res => {
              this.listaCart[i].post = res;
              // console.log('p',postP);
              // return postP;
            },
            error => {
              // postP = null;
            }
          );
        }
        
        this.dataSource = new MatTableDataSource(this.listaCart);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // for(let i = 0; i< this.listaCart.length; i++){
        //   console.log('d',this.listaCart[i]);
        //   this.listaCart[i].post = this.getPost(this.listaCart[i].id);
        // }
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

  async getPost(id: any):Promise<Post>{
    let postP = new Post();
    await this.articlesService.getOneProduct(id).subscribe(
      res => {
        postP = res;
        // console.log('p',postP);
        return postP;
      },
      error => {
        // postP = null;
      }
    );
    console.log('p',postP);
    return postP;
  }

  removeCart(id: any, productCart: ProductCart){
    this.productCartSevice.deleteCart(id).subscribe(
      res => {
        this.getCartAll()
        this.mycart.emit(productCart);
      },
      error => {
        this.getCartAll()
        this.mycart.emit(productCart);
        console.log(error);
      }
    );
  }

  getTotalCost() {
    return this.listaCart.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

  finaliceCompra(){
    console.log("dsd");
    this.buyService.postBuy(this.listaCart).subscribe(
      res => {
        console.log(res);
        this.openDialog2("Buy",res.message);
      },
      error => {
        console.log(error);
        this.openDialog2("Buy","Compra no Realizada");
      }
    );
  }

  openDialog2(data: string, title: string) {
    this.dialog.open(MsjAcceptComponent, {
      data: { 
        data: {
          msj: data,
          title: title
        }
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getCartAll();
    this.ngAfterViewInit();
  }

}
