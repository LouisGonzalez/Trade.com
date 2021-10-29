import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
@Injectable({
  providedIn: 'root'
})
export class BuyService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient) { }

  getVentas(){
    return this.http.get<any>(this.URL_API+'/ventas',{
      withCredentials:true
    });
  }

  getComprast(){
    return this.http.get<any>(this.URL_API+'/compras',{
      withCredentials:true
    });
  }

  postBuy(data: any){
    return this.http.post<any>(this.URL_API+'/Buy',data,{
      withCredentials:true
    });
  }

  postTransaction(data: any){
    return this.http.post<any>(this.URL_API+'/transaction', data,{
      withCredentials:true
    });
  }

  deleteCartAll(){
    return this.http.delete<any>(this.URL_API+'/CartAll',{
      withCredentials:true
    });
  }
}
