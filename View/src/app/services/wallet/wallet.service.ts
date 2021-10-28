import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  readonly URL_API = "http://localhost:3000";

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
