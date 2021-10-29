import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient) { }

  getMyWallet(){
    return this.http.get<any>(this.URL_API+'/myWallet',{
      withCredentials:true
    });
  }

  postAddCreditWll(data: any){
    return this.http.post<any>(this.URL_API+'/addCredit', data,{
      withCredentials:true
    });
  }

  
}
