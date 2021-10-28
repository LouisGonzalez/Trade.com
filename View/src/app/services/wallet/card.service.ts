import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  readonly URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getCards(){
    return this.http.get<any>(this.URL_API+'/cards',{
      withCredentials:true
    });
  }

  getAddCard(){
    return this.http.get<any>(this.URL_API+'/addCard',{
      withCredentials:true
    });
  }

  postAddCard(data: any){
    return this.http.post<any>(this.URL_API+'/addCard', data,{
      withCredentials:true
    });
  }

  deleteCards(){
    return this.http.delete<any>(this.URL_API+'/cards',{
      withCredentials:true
    });
  }
}
