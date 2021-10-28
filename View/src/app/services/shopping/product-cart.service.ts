import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/product-search.model';
import { GLOBAL } from '../global';


@Injectable({
  providedIn: 'root'
})
export class  ProductCartService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient) { }

  getCartAll(){
    return this.http.get<any>(this.URL_API+'/CartAll',{
      withCredentials:true
    });
  }

  getShop(){
    return this.http.get<any>(this.URL_API+'/Shop',{
      withCredentials:true
    });
  }

  getTotalCart(){
    return this.http.get<any>(this.URL_API+'/totalCart',{
      withCredentials:true
    });
  }

  deleteCart(data: any){
    return this.http.delete<any>(this.URL_API+`/Cart/${data}`,{
      withCredentials:true
    });
  }

  deleteCartAll(){
    return this.http.delete<any>(this.URL_API+'/CartAll',{
      withCredentials:true
    });
  }

  postCart(data: any){
    return this.http.post<any>(this.URL_API+'/Cart', data,{
      withCredentials:true
    });
  }

  patchCart(){
    return this.http.patch<any>(this.URL_API+'/Cart',{
      withCredentials:true
    });
  }



}